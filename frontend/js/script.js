// =============================================================================
// TOP GRILL — Frontend Script
// =============================================================================

// --- Config ------------------------------------------------------------------

const API_BASE_URL = window.location.hostname === 'localhost'
    ? 'http://localhost:5000/api'
    : 'https://topgrill-back.onrender.com/api';

const ASSETS_BASE_URL = window.location.hostname === 'localhost'
    ? 'http://localhost:5000'
    : 'https://topgrill-back.onrender.com';

// --- State -------------------------------------------------------------------

let adminToken   = sessionStorage.getItem('adminToken');
let menuItems    = [];
let activeCategory = 'all';
let editingItemId  = null;
let currentItem    = { name: '', basePrice: 0 };

// --- DOM refs ----------------------------------------------------------------

const tabBtns        = document.querySelectorAll('.tab-btn');
const orderModal     = document.getElementById('orderModal');
const successModal   = document.getElementById('successModal');
const menuSearchInput = document.getElementById('menuSearchInput');

// =============================================================================
// IMAGE HELPERS
// =============================================================================

function getPlaceholderImage(itemName) {
    const label = (itemName || 'Menu Item').toUpperCase();
    const w = 300, h = 200;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
        <defs>
            <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#1a1a1a"/>
                <stop offset="100%" style="stop-color:#2a2a2a"/>
            </linearGradient>
            <linearGradient id="fire" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%"   style="stop-color:#7a0000"/>
                <stop offset="40%"  style="stop-color:#c8102e"/>
                <stop offset="75%"  style="stop-color:#ff3d00"/>
                <stop offset="100%" style="stop-color:#ff7a00"/>
            </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#bg)"/>
        <g transform="translate(110,20) scale(1.5)">
            <path fill="url(#fire)" d="M32 4 C42 14 50 24 50 38 C50 51 42 60 32 60 C22 60 14 52 14 40 C14 29 19 21 26 14 C26 24 34 28 34 36 C34 29 40 20 32 4" opacity="0.9"/>
            <path fill="#ff6a00"    d="M32 22 C37 28 41 34 41 42 C41 49 37 54 32 54 C27 54 23 50 23 43 C23 37 27 33 30 29 C30 34 34 37 34 41 C34 36 37 31 32 22" opacity="0.8"/>
        </g>
        <text x="150" y="148" font-family="Montserrat,sans-serif" font-weight="700" font-size="13" fill="#f9a602" text-anchor="middle" letter-spacing="2">TOP GRILL</text>
        <text x="150" y="168" font-family="Poppins,sans-serif" font-weight="600" font-size="10" fill="rgba(255,255,255,0.45)" text-anchor="middle">${label.length > 28 ? label.slice(0, 25) + '…' : label}</text>
    </svg>`;
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

function getImageUrl(imagePath, itemName = 'Menu Item') {
    if (!imagePath || imagePath === '' || imagePath === '#' || imagePath === '../assets/') {
        return getPlaceholderImage(itemName);
    }
    if (imagePath.startsWith('http')) return imagePath;
    const clean = imagePath.startsWith('/assets/')
        ? imagePath
        : '/assets/' + imagePath.replace(/^\/+/, '');
    return `${ASSETS_BASE_URL}${clean}`;
}

function handleImageError(img, itemName) {
    if (!img.dataset.retryCount) img.dataset.retryCount = 0;
    if (parseInt(img.dataset.retryCount) < 2) {
        img.dataset.retryCount++;
        const src = img.src;
        if (src.includes('undefined') || src.includes('null')) {
            img.src = getPlaceholderImage(itemName);
        } else if (src.includes('localhost') && !src.includes('?retry')) {
            img.src = src + '?retry=' + Date.now();
        } else {
            img.src = getPlaceholderImage(itemName);
        }
    } else {
        img.src = getPlaceholderImage(itemName);
    }
}
window.handleImageError = handleImageError;

// =============================================================================
// UTILITIES
// =============================================================================

function escapeHtml(text) {
    if (!text) return '';
    const d = document.createElement('div');
    d.textContent = text;
    return d.innerHTML;
}

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.style.backgroundColor = type === 'success' ? '#1a1' : '#c8102e';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

function parseJSONField(value) {
    if (!value?.trim()) return undefined;
    try { return JSON.parse(value); } catch { return undefined; }
}

// =============================================================================
// UNIFIED FILTER
// activeCategory + search term are both applied in one pass so they never
// override each other.
// =============================================================================

function filterMenu() {
    const searchTerm = (menuSearchInput?.value || '').toLowerCase().trim();

    document.querySelectorAll('.menu-section').forEach(section => {
        const key = section.id.replace('-section', '');
        if (activeCategory !== 'all' && key !== activeCategory) {
            section.style.display = 'none';
            return;
        }

        let sectionVisible = false;
        section.querySelectorAll('.menu-item-simple').forEach(item => {
            const name = item.querySelector('h4')?.textContent.toLowerCase() || '';
            const desc = item.querySelector('p')?.textContent.toLowerCase() || '';
            const show = !searchTerm || name.includes(searchTerm) || desc.includes(searchTerm);
            item.style.display = show ? '' : 'none';
            if (show) sectionVisible = true;
        });
        section.style.display = sectionVisible ? '' : 'none';
    });

    // No-results message
    const container = document.querySelector('.menu-content-container');
    let noResults = document.querySelector('.no-results-message');
    const anyVisible = [...document.querySelectorAll('.menu-section')]
        .some(s => s.style.display !== 'none');

    if (!anyVisible && searchTerm) {
        if (!noResults) {
            noResults = document.createElement('div');
            noResults.className = 'no-results-message';
            noResults.style.cssText = 'text-align:center;padding:40px;color:var(--gray)';
            container?.appendChild(noResults);
        }
        noResults.innerHTML = `
            <i class="fas fa-search" style="font-size:3rem;margin-bottom:15px;display:block;color:var(--secondary);"></i>
            <p>No items found matching "<strong>${escapeHtml(searchTerm)}</strong>"</p>
            <p style="font-size:0.9rem;margin-top:10px;">Try a different search or browse our categories</p>`;
        noResults.style.display = 'block';
    } else if (noResults) {
        noResults.style.display = 'none';
    }
}

// =============================================================================
// MENU FETCH & RENDER
// =============================================================================

async function fetchMenuItems() {
    showLoadingSkeleton(true);
    try {
        const res = await fetch(`${API_BASE_URL}/menu`);
        if (!res.ok) throw new Error();
        menuItems = await res.json();
        renderAllMenuSections();
    } catch {
        showToast('Using offline menu', 'error');
        loadFallbackMenuData();
    } finally {
        showLoadingSkeleton(false);
    }
}

function showLoadingSkeleton(show) {
    const skeleton = document.getElementById('menuLoadingSkeleton');
    const content  = document.querySelector('.menu-content-container');
    if (skeleton) skeleton.style.display = show ? 'block' : 'none';
    if (content)  content.style.display  = show ? 'none'  : 'block';
}

function renderAllMenuSections() {
    const container = document.getElementById('menuContentContainer');
    if (!container) return;
    container.innerHTML = '';

    const categories = {};
    menuItems.forEach(item => {
        (categories[item.category] ??= []).push(item);
    });

    const CATEGORY_META = {
        BreakFast:    { title: 'BreakFast',     icon: 'fas fa-hamburger',       subtitle: 'Served with a side of fries' },
        Lunch:        { title: 'Lunch',          icon: 'fas fa-drumstick-bite',  subtitle: 'Served with papa and moroho/chakalaka' },
        classics:     { title: 'Classics',       icon: 'fas fa-star',            subtitle: '' },
        Drinks:       { title: 'Drinks',         icon: 'fas fa-glass-martini',   subtitle: '' },
        HotBeverages: { title: 'Hot Beverages',  icon: 'fas fa-mug-hot',         subtitle: '' },
    };

    Object.keys(categories).forEach(key => {
        const meta = CATEGORY_META[key] || { title: key, icon: 'fas fa-utensils', subtitle: '' };
        const section = document.createElement('div');
        section.className = 'menu-section';
        section.id = `${key}-section`;
        section.innerHTML = `
            <h3 class="menu-section-title"><i class="${meta.icon}"></i> ${meta.title}</h3>
            ${meta.subtitle ? `<p class="menu-section-subtitle">${meta.subtitle}</p>` : ''}
            <div class="menu-category"></div>`;
        const grid = section.querySelector('.menu-category');
        categories[key].forEach(item => grid.appendChild(createMenuItem(item)));
        container.appendChild(section);
    });

    attachMenuDelegation(container);
    initLightbox();
    filterMenu();
}

function createMenuItem(item) {
    const el = document.createElement('div');
    el.className = 'menu-item-simple';
    el.dataset.category = item.category;
    el.dataset.id = item._id || '';

    const basePrice    = item.sizes?.length ? item.sizes[0].price : item.price;
    const basePriceNum = parseInt(String(basePrice).replace(/\D/g, '')) || 0;
    el.dataset.basePrice = basePriceNum;

    const sizesHTML = item.sizes?.length ? `
        <div class="size-selector">
            ${item.sizes.map((s, i) => `
                <button class="size-btn${i === 0 ? ' active' : ''}" data-price="${s.price}" data-label="${escapeHtml(s.label)}">
                    ${escapeHtml(s.label)}<span class="size-price">${s.price}</span>
                </button>`).join('')}
        </div>` : '';

    const flavorsHTML = item.flavors?.length ? `
        <div class="flavor-selector"><hr>
            <div class="flavor-btns">
                ${item.flavors.map((f, i) => `
                    <button class="flavor-btn${i === 0 ? ' active' : ''}" data-flavor="${escapeHtml(f.label)}" style="--flavor-color:${f.color || '#f97316'}">
                        <span class="flavor-name">${escapeHtml(f.label)}</span>
                    </button>`).join('')}
            </div>
        </div>` : '';

    const starchHTML = item.starchOptions?.length ? `
        <div class="starch-selector">
            <div class="starch-btns">
                ${item.starchOptions.map((s, i) => `
                    <button class="starch-btn${i === 0 ? ' active' : ''}" data-starch="${escapeHtml(s.label)}" data-addon="${s.addon || 0}">
                        ${escapeHtml(s.label)}<span class="starch-price">M${basePriceNum + (s.addon || 0)}</span>
                    </button>`).join('')}
            </div>
        </div>` : '';

    el.innerHTML = `
        <div class="menu-item-image">
            <img src="${getImageUrl(item.image, item.name)}" alt="${escapeHtml(item.name)}" loading="lazy"
                onerror="handleImageError(this,'${escapeHtml(item.name)}')">
        </div>
        <div class="menu-item-simple-header">
            <h4>${escapeHtml(item.name)}</h4>
            <div class="price">${basePrice}</div>
        </div>
        ${sizesHTML}${flavorsHTML}${starchHTML}
        <div class="menu-item-simple-header">
            <p>${escapeHtml(item.description || 'No description available')}</p>
            <button class="orderBtn">Order</button>
        </div>`;
    return el;
}

// Event delegation on the menu container — one listener handles all item interactions
function attachMenuDelegation(container) {
    container.addEventListener('click', e => {
        // Order button
        const orderBtn = e.target.closest('.orderBtn');
        if (orderBtn) {
            const card = orderBtn.closest('.menu-item-simple');
            let displayName = card.querySelector('h4').textContent;
            const price     = card.querySelector('.price').textContent;
            const flavor    = card.querySelector('.flavor-btn.active');
            const size      = card.querySelector('.size-btn.active');
            const starch    = card.querySelector('.starch-btn.active');
            if (flavor) displayName += ` (${flavor.dataset.flavor})`;
            if (size)   displayName += ` – ${size.dataset.label}`;
            if (starch) displayName += ` + ${starch.dataset.starch}`;
            initializeOrderModal(displayName, price);
            orderModal?.classList.add('active');
            document.body.style.overflow = 'hidden';
            return;
        }

        // Size button
        const sizeBtn = e.target.closest('.size-btn');
        if (sizeBtn) {
            sizeBtn.closest('.size-selector').querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
            sizeBtn.classList.add('active');
            sizeBtn.closest('.menu-item-simple').querySelector('.price').textContent = sizeBtn.dataset.price;
            return;
        }

        // Flavor button
        const flavorBtn = e.target.closest('.flavor-btn');
        if (flavorBtn) {
            flavorBtn.closest('.flavor-selector').querySelectorAll('.flavor-btn').forEach(b => b.classList.remove('active'));
            flavorBtn.classList.add('active');
            return;
        }

        // Starch button
        const starchBtn = e.target.closest('.starch-btn');
        if (starchBtn) {
            starchBtn.closest('.starch-selector').querySelectorAll('.starch-btn').forEach(b => b.classList.remove('active'));
            starchBtn.classList.add('active');
            const card  = starchBtn.closest('.menu-item-simple');
            const base  = parseInt(card.dataset.basePrice) || 0;
            const addon = parseInt(starchBtn.dataset.addon) || 0;
            card.querySelector('.price').textContent = `M${base + addon}`;
            return;
        }

        // Image lightbox
        const imgWrap = e.target.closest('.menu-item-image');
        if (imgWrap) {
            const all = [...document.querySelectorAll('.menu-item-image')];
            openLightbox(all.indexOf(imgWrap));
        }
    });
}

// =============================================================================
// ORDER MODAL
// =============================================================================

function initializeOrderModal(itemName, priceText) {
    currentItem.name      = itemName;
    currentItem.basePrice = parseInt(String(priceText).replace(/\D/g, '')) || 0;

    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    set('modalItemName',   itemName);
    set('modalItemPrice',  priceText);
    set('summaryItemName', itemName);
    set('summaryUnitPrice', priceText);

    const qty = document.getElementById('orderQuantity');
    if (qty) qty.value = 1;
    updateTotalPrice();
    document.getElementById('orderForm')?.reset();
}

function updateTotalPrice() {
    const qty   = parseInt(document.getElementById('orderQuantity')?.value) || 1;
    const total = currentItem.basePrice * qty;
    const set   = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    set('summaryQuantity',  qty);
    set('summaryTotalPrice', `M${total}`);
    const priceEl = document.getElementById('modalItemPrice');
    if (priceEl) priceEl.textContent = qty > 1
        ? `M${currentItem.basePrice} × ${qty} = M${total}`
        : `M${currentItem.basePrice}`;
}

function generateOrderNumber() {
    return `TG-${Date.now().toString().slice(-6)}-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`;
}

async function sendOrderEmail(order) {
    try {
        const res = await fetch(`${API_BASE_URL}/orders`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order)
        });
        if (!res.ok) throw new Error();
        return true;
    } catch {
        console.warn('Order notification failed');
        return false;
    }
}

// =============================================================================
// CAROUSEL
// =============================================================================

let currentSlide  = 0;
let slideInterval;
const totalSlides = () => document.querySelectorAll('.carousel-dot').length;

function updateCarousel() {
    const track = document.querySelector('.carousel-slides');
    if (track) track.style.transform = `translateX(-${currentSlide * 100}%)`;
    document.querySelectorAll('.carousel-dot').forEach((d, i) => d.classList.toggle('active', i === currentSlide));
    const cur = document.querySelector('.current-slide');
    if (cur) cur.textContent = currentSlide + 1;
}

function nextSlide() { currentSlide = (currentSlide + 1) % totalSlides(); updateCarousel(); }
function prevSlide() { currentSlide = (currentSlide - 1 + totalSlides()) % totalSlides(); updateCarousel(); }
function startAutoPlay() { if (slideInterval) clearInterval(slideInterval); slideInterval = setInterval(nextSlide, 5000); }
function stopAutoPlay()  { clearInterval(slideInterval); }

// =============================================================================
// LIGHTBOX
// =============================================================================

let lightboxImages = [];
let lightboxIndex  = 0;

function initLightbox() {
    lightboxImages = [...document.querySelectorAll('.menu-item-image img')].map(img => ({
        src:     img.getAttribute('src'),
        caption: img.closest('.menu-item-simple')?.querySelector('h4')?.textContent || ''
    }));
}

function openLightbox(idx) {
    if (!lightboxImages[idx]) return;
    lightboxIndex = idx;
    const el  = document.getElementById('lightboxImage');
    const cap = document.getElementById('lightboxCaption');
    if (el)  el.src          = lightboxImages[idx].src;
    if (cap) cap.textContent = lightboxImages[idx].caption;
    document.getElementById('imageLightbox')?.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('imageLightbox')?.classList.remove('active');
    document.body.style.overflow = '';
}

function nextImage() { lightboxIndex = (lightboxIndex + 1) % lightboxImages.length; openLightbox(lightboxIndex); }
function prevImage() { lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length; openLightbox(lightboxIndex); }

// =============================================================================
// ADMIN OVERLAY
// Accessed only by typing 'admin' in the search bar — not linked in the nav.
// =============================================================================

function showAdminOverlay() {
    const overlay = document.getElementById('adminOverlay');
    if (!overlay) return;
    overlay.classList.add('active');
    document.body.classList.add('admin-overlay-active');
    if (adminToken) {
        document.getElementById('adminLoginSection').style.display    = 'none';
        document.getElementById('adminDashboardSection').style.display = 'block';
        loadAdminMenuItems();
    } else {
        document.getElementById('adminLoginSection').style.display    = 'block';
        document.getElementById('adminDashboardSection').style.display = 'none';
    }
}

function closeAdminOverlay() {
    document.getElementById('adminOverlay')?.classList.remove('active');
    document.body.classList.remove('admin-overlay-active');
}

async function adminLogin() {
    const username = document.getElementById('adminUsername')?.value.trim();
    const password = document.getElementById('adminPassword')?.value.trim();
    if (!username || !password) { showToast('Enter credentials', 'error'); return; }
    try {
        const res = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        if (!res.ok) throw new Error('Invalid credentials');
        const data = await res.json();
        adminToken = data.token;
        sessionStorage.setItem('adminToken', adminToken);
        document.getElementById('adminLoginSection').style.display    = 'none';
        document.getElementById('adminDashboardSection').style.display = 'block';
        loadAdminMenuItems();
        showToast('Login successful!', 'success');
    } catch (err) {
        showToast(err.message, 'error');
    }
}

function logoutAdmin() {
    adminToken = null;
    sessionStorage.removeItem('adminToken');
    document.getElementById('adminLoginSection').style.display    = 'block';
    document.getElementById('adminDashboardSection').style.display = 'none';
    closeAdminOverlay();
    showToast('Logged out', 'success');
}

async function loadAdminMenuItems() {
    const grid = document.getElementById('adminMenuItemsGrid');
    if (!grid) return;
    grid.innerHTML = '<p style="text-align:center;padding:30px;">Loading…</p>';
    try {
        const res   = await fetch(`${API_BASE_URL}/menu`);
        const items = await res.json();
        renderAdminGrid(items);
    } catch {
        grid.innerHTML = '<p style="text-align:center;padding:30px;color:#c8102e;">Failed to load menu</p>';
    }
}

function renderAdminGrid(items) {
    const grid = document.getElementById('adminMenuItemsGrid');
    if (!grid) return;
    grid.innerHTML = '';
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'admin-item-card';
        card.innerHTML = `
            <img src="${getImageUrl(item.image, item.name)}"
                onerror="handleImageError(this,'${escapeHtml(item.name)}')" alt="${escapeHtml(item.name)}">
            <div class="admin-item-info">
                <h4>${escapeHtml(item.name)}</h4>
                <p><strong>${item.price}</strong> · ${item.category}</p>
                <div class="admin-card-actions">
                    <button class="btn-edit-item"   data-id="${item._id}">Edit</button>
                    <button class="btn-delete-item" data-id="${item._id}">Delete</button>
                </div>
            </div>`;
        grid.appendChild(card);
    });
    grid.querySelectorAll('.btn-edit-item').forEach(btn =>
        btn.addEventListener('click', () => editMenuItem(btn.dataset.id)));
    grid.querySelectorAll('.btn-delete-item').forEach(btn =>
        btn.addEventListener('click', () => deleteMenuItem(btn.dataset.id)));
}

async function deleteMenuItem(id) {
    if (!confirm('Delete this item permanently?')) return;
    try {
        const res = await fetch(`${API_BASE_URL}/menu/${id}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${adminToken}` }
        });
        if (!res.ok) throw new Error();
        showToast('Item deleted', 'success');
        loadAdminMenuItems();
        fetchMenuItems();
    } catch {
        showToast('Delete failed', 'error');
    }
}

// --- Add / Edit modal --------------------------------------------------------

function openAddMenuItemModal() {
    editingItemId = null;
    const title = document.getElementById('menuItemModalTitle');
    if (title) title.textContent = 'Add Menu Item';
    document.getElementById('menuItemForm')?.reset();
    document.getElementById('menuItemModal')?.classList.add('active');
}

async function editMenuItem(id) {
    editingItemId = id;
    try {
        const res  = await fetch(`${API_BASE_URL}/menu/${id}`);
        if (!res.ok) throw new Error();
        const item = await res.json();

        document.getElementById('menuItemModalTitle').textContent = 'Edit Menu Item';
        const set = (elId, val) => { const el = document.getElementById(elId); if (el) el.value = val ?? ''; };
        set('itemName',         item.name);
        set('itemPrice',        item.price);
        set('itemImage',        item.image);
        set('itemDescription',  item.description);
        set('itemCategory',     item.category);
        set('itemSizes',        item.sizes?.length        ? JSON.stringify(item.sizes, null, 2)        : '');
        set('itemFlavors',      item.flavors?.length      ? JSON.stringify(item.flavors, null, 2)      : '');
        set('itemStarchOptions', item.starchOptions?.length ? JSON.stringify(item.starchOptions, null, 2) : '');

        document.getElementById('menuItemModal')?.classList.add('active');
    } catch {
        showToast('Error loading item', 'error');
    }
}

function closeMenuItemModal() {
    document.getElementById('menuItemModal')?.classList.remove('active');
    editingItemId = null;
}

async function handleMenuItemSubmit(e) {
    e.preventDefault();
    const get = id => document.getElementById(id)?.value;
    const payload = {
        name:          get('itemName'),
        price:         get('itemPrice'),
        image:         get('itemImage'),
        description:   get('itemDescription'),
        category:      get('itemCategory'),
        sizes:         parseJSONField(get('itemSizes')),
        flavors:       parseJSONField(get('itemFlavors')),
        starchOptions: parseJSONField(get('itemStarchOptions'))
    };

    if (!payload.name || !payload.price || !payload.image || !payload.category) {
        showToast('Please fill in all required fields', 'error');
        return;
    }

    const url    = editingItemId ? `${API_BASE_URL}/menu/${editingItemId}` : `${API_BASE_URL}/menu`;
    const method = editingItemId ? 'PUT' : 'POST';

    try {
        const res = await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${adminToken}` },
            body: JSON.stringify(payload)
        });
        if (!res.ok) throw new Error();
        showToast(editingItemId ? 'Item updated!' : 'Item added!', 'success');
        closeMenuItemModal();
        loadAdminMenuItems();
        fetchMenuItems();
    } catch {
        showToast('Save failed', 'error');
    }
}

// =============================================================================
// DARK MODE
// =============================================================================

function enableDarkMode() {
    document.body.classList.add('dark-mode');
    const btn = document.getElementById('darkModeToggle');
    if (btn) {
        btn.classList.add('active');
        btn.querySelector('i')?.setAttribute('class', 'fas fa-sun');
        const span = btn.querySelector('span');
        if (span) span.textContent = 'Light Mode';
    }
    localStorage.setItem('theme', 'dark');
}

function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    const btn = document.getElementById('darkModeToggle');
    if (btn) {
        btn.classList.remove('active');
        btn.querySelector('i')?.setAttribute('class', 'fas fa-moon');
        const span = btn.querySelector('span');
        if (span) span.textContent = 'Dark Mode';
    }
    localStorage.setItem('theme', 'light');
}

function initializeDarkMode() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        enableDarkMode();
    }
    document.getElementById('darkModeToggle')?.addEventListener('click', () => {
        document.body.classList.contains('dark-mode') ? disableDarkMode() : enableDarkMode();
    });
}

// =============================================================================
// FALLBACK MENU DATA
// =============================================================================

function loadFallbackMenuData() {
    menuItems = [
        { name: 'BreakFast Sandwich',  price: 'M35', image: '', description: 'Chicken Mayo, baked beans, Vianna, Boiled Eggs', category: 'BreakFast' },
        { name: 'BreakFast Burger',    price: 'M25', image: '', description: 'Ham, Cheese, Scrambled eggs, lettuce',            category: 'BreakFast' },
        { name: 'Chicken Quarter Leg', price: 'M50', image: '', description: 'Juicy chicken portions with traditional sides',   category: 'Lunch' },
        { name: 'Pork',                price: 'M50', image: '', description: 'Tender pork cuts',                                category: 'Lunch' },
        { name: 'Fries',               price: 'M15', image: '', description: 'Crispy golden fries',                             category: 'classics' },
        { name: 'Coca-Cola',           price: 'M15', image: '', description: 'The classic refreshing cola',                     category: 'Drinks' },
    ];
    renderAllMenuSections();
}

// =============================================================================
// BOOTSTRAP
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Carousel counter
    const totalEl = document.querySelector('.total-slides');
    if (totalEl) totalEl.textContent = totalSlides();
    updateCarousel();
    startAutoPlay();

    // Carousel controls
    document.querySelector('.prev-btn')?.addEventListener('click', () => { prevSlide(); startAutoPlay(); });
    document.querySelector('.next-btn')?.addEventListener('click', () => { nextSlide(); startAutoPlay(); });
    document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
        dot.addEventListener('click', () => { currentSlide = i; updateCarousel(); startAutoPlay(); });
    });
    const carousel = document.querySelector('.hero-carousel');
    carousel?.addEventListener('mouseenter', stopAutoPlay);
    carousel?.addEventListener('mouseleave', startAutoPlay);

    // Search — 'admin' reveals the overlay, anything else filters the menu
    menuSearchInput?.addEventListener('input', e => {
        if (e.target.value.trim().toLowerCase() === 'admin') {
            e.target.value = '';
            showAdminOverlay();
        } else {
            filterMenu();
        }
    });

    // Category tabs
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCategory = btn.dataset.tab;
            filterMenu();
        });
    });

    // Order quantity
    const qtyInput = document.getElementById('orderQuantity');
    document.getElementById('increaseQty')?.addEventListener('click', () => {
        if (parseInt(qtyInput.value) < 10) { qtyInput.value++; updateTotalPrice(); }
    });
    document.getElementById('decreaseQty')?.addEventListener('click', () => {
        if (parseInt(qtyInput.value) > 1) { qtyInput.value--; updateTotalPrice(); }
    });
    qtyInput?.addEventListener('input', () => {
        qtyInput.value = Math.min(10, Math.max(1, parseInt(qtyInput.value) || 1));
        updateTotalPrice();
    });

    // Order form submit
    document.getElementById('orderForm')?.addEventListener('submit', async e => {
        e.preventDefault();
        const customerName  = document.getElementById('customerName')?.value.trim();
        const customerPhone = document.getElementById('customerPhone')?.value.trim();
        if (!customerName || !customerPhone) {
            alert('Please fill in your name and phone number.');
            return;
        }
        const submitBtn = document.getElementById('submitOrder');
        if (submitBtn) { submitBtn.disabled = true; submitBtn.classList.add('loading'); }

        const qty         = parseInt(qtyInput?.value) || 1;
        const orderNumber = generateOrderNumber();
        const total       = currentItem.basePrice * qty;
        const timestamp   = new Date().toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' });

        await sendOrderEmail({
            orderNumber, item: currentItem.name, quantity: qty,
            total: `M${total}`, customerName, customerPhone,
            specialInstructions: document.getElementById('specialInstructions')?.value.trim(),
            timestamp
        });

        const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
        set('successOrderNumber', orderNumber);
        set('successItemName',    `${currentItem.name} × ${qty}`);
        set('successQuantity',    qty);
        set('successTotalPrice',  `M${total}`);
        set('successPhone',       customerPhone);

        orderModal?.classList.remove('active');
        successModal?.classList.add('active');
        if (submitBtn) { submitBtn.disabled = false; submitBtn.classList.remove('loading'); }
    });

    // Modal close helpers
    const closeEl = (el) => { el?.classList.remove('active'); document.body.style.overflow = ''; };
    document.getElementById('closeModal')?.addEventListener('click',   () => closeEl(orderModal));
    document.getElementById('cancelOrder')?.addEventListener('click',  () => closeEl(orderModal));
    document.getElementById('closeSuccess')?.addEventListener('click', () => closeEl(successModal));
    orderModal?.addEventListener('click',   e => { if (e.target === orderModal)   closeEl(orderModal); });
    successModal?.addEventListener('click', e => { if (e.target === successModal) closeEl(successModal); });

    // Lightbox
    document.getElementById('lightboxClose')?.addEventListener('click',  closeLightbox);
    document.getElementById('prevLightbox')?.addEventListener('click',   prevImage);
    document.getElementById('nextLightbox')?.addEventListener('click',   nextImage);
    document.getElementById('imageLightbox')?.addEventListener('click',  e => {
        if (e.target === document.getElementById('imageLightbox')) closeLightbox();
    });

    // Admin overlay controls
    document.getElementById('adminLoginBtnOverlay')?.addEventListener('click',   adminLogin);
    document.getElementById('adminLogoutBtnOverlay')?.addEventListener('click',  logoutAdmin);
    document.getElementById('addMenuItemBtnOverlay')?.addEventListener('click',  openAddMenuItemModal);
    document.getElementById('refreshMenuBtnOverlay')?.addEventListener('click',  loadAdminMenuItems);
    document.getElementById('adminOverlayCloseBtn')?.addEventListener('click',   closeAdminOverlay);
    document.getElementById('adminOverlay')?.addEventListener('click', e => {
        if (e.target === document.getElementById('adminOverlay')) closeAdminOverlay();
    });

    // Menu item form modal
    document.getElementById('menuItemForm')?.addEventListener('submit',     handleMenuItemSubmit);
    document.getElementById('closeMenuItemModal')?.addEventListener('click', closeMenuItemModal);
    document.getElementById('cancelMenuItemBtn')?.addEventListener('click',  closeMenuItemModal);

    // Keyboard shortcuts
    document.addEventListener('keydown', e => {
        const lightbox = document.getElementById('imageLightbox');
        if (lightbox?.classList.contains('active')) {
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft')  prevImage();
            if (e.key === 'Escape')     closeLightbox();
            return;
        }
        if (orderModal?.classList.contains('active') && e.key === 'Escape') closeEl(orderModal);
    });

    // Mobile nav
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navMenu   = document.getElementById('navMenu');
    mobileBtn?.addEventListener('click', () => navMenu?.classList.toggle('active'));
    document.addEventListener('click', e => {
        if (navMenu?.classList.contains('active') && !navMenu.contains(e.target) && !mobileBtn.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });

    // Smooth scroll
    document.querySelectorAll('nav a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            const id = a.getAttribute('href');
            if (id === '#home') window.scrollTo({ top: 0, behavior: 'smooth' });
            else document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            navMenu?.classList.remove('active');
        });
    });

    initializeDarkMode();
    fetchMenuItems();
});