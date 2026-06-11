// API Configuration
const API_BASE_URL = 'http://localhost:5000/api';
const ASSETS_BASE_URL = 'http://localhost:5000';
let adminToken = localStorage.getItem('adminToken');
let menuItems = [];

// Initialize EmailJS - Replace with your actual keys
emailjs.init('MOqc3iPWP82ABDWFy');

// DOM Elements
const menuContainer = document.querySelector('.menu .container');
const menuLoadingSkeleton = document.getElementById('menuLoadingSkeleton');
const tabBtns = document.querySelectorAll('.tab-btn');
const adminPanelLink = document.getElementById('adminPanelLink');
const adminPanel = document.getElementById('adminPanel');
const orderModal = document.getElementById('orderModal');
const successModal = document.getElementById('successModal');
const menuSearchInput = document.getElementById('menuSearchInput');

// Placeholder image generator
function getPlaceholderImage(itemName, size = '300x200') {
    const displayName = (itemName || 'No Image').toUpperCase();
    const colors = {
        primary: 'c8102e',
        secondary: 'f9a602',
        dark: '1a1a1a',
        light: 'f9f5f0'
    };
    
    // Create an SVG placeholder with the item name
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size.split('x')[0]}" height="${size.split('x')[1]}" viewBox="0 0 ${size.split('x')[0]} ${size.split('x')[1]}">
        <defs>
            <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#${colors.dark};stop-opacity:1" />
                <stop offset="100%" style="stop-color:#2a2a2a;stop-opacity:1" />
            </linearGradient>
            <linearGradient id="fireGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" style="stop-color:#7a0000;stop-opacity:1" />
                <stop offset="40%" style="stop-color:#${colors.primary};stop-opacity:1" />
                <stop offset="75%" style="stop-color:#ff3d00;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#ff7a00;stop-opacity:1" />
            </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#bgGrad)"/>
        
        <!-- Grid pattern -->
        <g stroke="rgba(249,166,2,0.08)" stroke-width="1">
            ${Array.from({ length: parseInt(size.split('x')[0]) / 30 }, (_, i) => `<line x1="${i * 30}" y1="0" x2="${i * 30}" y2="${size.split('x')[1]}" />`).join('')}
            ${Array.from({ length: parseInt(size.split('x')[1]) / 30 }, (_, i) => `<line x1="0" y1="${i * 30}" x2="${size.split('x')[0]}" y2="${i * 30}" />`).join('')}
        </g>
        
        <!-- Flame Icon -->
        <g transform="translate(${parseInt(size.split('x')[0]) / 2 - 40}, 40) scale(1.5)">
            <path fill="url(#fireGrad)" d="M32 4 C42 14 50 24 50 38 C50 51 42 60 32 60 C22 60 14 52 14 40 C14 29 19 21 26 14 C26 24 34 28 34 36 C34 29 40 20 32 4" opacity="0.9"/>
            <path fill="#ff6a00" d="M32 22 C37 28 41 34 41 42 C41 49 37 54 32 54 C27 54 23 50 23 43 C23 37 27 33 30 29 C30 34 34 37 34 41 C34 36 37 31 32 22" opacity="0.8"/>
        </g>
        
        <!-- Text -->
        <text x="${parseInt(size.split('x')[0]) / 2}" y="${parseInt(size.split('x')[1]) - 60}" font-family="Montserrat, sans-serif" font-weight="700" font-size="14" fill="#${colors.secondary}" text-anchor="middle" letter-spacing="2">TOP GRILL</text>
        <text x="${parseInt(size.split('x')[0]) / 2}" y="${parseInt(size.split('x')[1]) - 38}" font-family="Poppins, sans-serif" font-weight="600" font-size="10" fill="rgba(255,255,255,0.4)" text-anchor="middle" letter-spacing="1">FOOD SPECIALISTS</text>
        <text x="${parseInt(size.split('x')[0]) / 2}" y="${parseInt(size.split('x')[1]) - 20}" font-family="Poppins, sans-serif" font-weight="600" font-size="11" fill="rgba(255,255,255,0.6)" text-anchor="middle" letter-spacing="1">${displayName.length > 25 ? displayName.substring(0, 22) + '...' : displayName}</text>
    </svg>`;
    
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

// Helper function to get full image URL with placeholder fallback
function getImageUrl(imagePath, itemName = 'Menu Item') {
    if (!imagePath || imagePath === '../assets/' || imagePath === '' || imagePath === '#') {
        return getPlaceholderImage(itemName);
    }
    if (imagePath.startsWith('http')) {
        return imagePath;
    }
    // Ensure the path starts with /assets/
    let cleanPath = imagePath;
    if (!cleanPath.startsWith('/assets/') && cleanPath.startsWith('assets/')) {
        cleanPath = '/' + cleanPath;
    }
    if (!cleanPath.startsWith('/assets/')) {
        cleanPath = '/assets/' + cleanPath.replace(/^\/+/, '');
    }
    return `${ASSETS_BASE_URL}${cleanPath}`;
}

// Handle image loading errors
function handleImageError(img, itemName) {
    if (!img.dataset.retryCount) {
        img.dataset.retryCount = 0;
    }
    
    if (img.dataset.retryCount < 2) {
        // Try to fix the URL
        let currentSrc = img.src;
        img.dataset.retryCount++;
        
        if (currentSrc.includes('undefined') || currentSrc.includes('null')) {
            img.src = getPlaceholderImage(itemName);
        } else if (currentSrc.includes('http://localhost:5000/assets/') && !currentSrc.includes('?retry')) {
            // Add cache buster
            img.src = currentSrc + '?retry=' + Date.now();
        } else {
            img.src = getPlaceholderImage(itemName);
        }
    } else {
        img.src = getPlaceholderImage(itemName);
    }
}

// Add this function to filter menu items by search term
function filterMenuBySearch() {
    const searchTerm = menuSearchInput ? menuSearchInput.value.toLowerCase().trim() : '';
    const menuSections = document.querySelectorAll('.menu-section');
    let hasVisibleItems = false;
    
    menuSections.forEach(section => {
        const menuItems = section.querySelectorAll('.menu-item-simple');
        let sectionHasVisibleItems = false;
        
        menuItems.forEach(item => {
            const itemName = item.querySelector('h4')?.textContent.toLowerCase() || '';
            const itemDesc = item.querySelector('.menu-item-simple-header p')?.textContent.toLowerCase() || '';
            const matches = searchTerm === '' || itemName.includes(searchTerm) || itemDesc.includes(searchTerm);
            
            if (matches) {
                item.style.display = '';
                sectionHasVisibleItems = true;
                hasVisibleItems = true;
            } else {
                item.style.display = 'none';
            }
        });
        
        // Hide section if no items match
        section.style.display = sectionHasVisibleItems ? '' : 'none';
    });
    
    // Show "no results" message if needed
    let noResultsMsg = document.querySelector('.no-results-message');
    if (!hasVisibleItems && searchTerm !== '') {
        if (!noResultsMsg) {
            noResultsMsg = document.createElement('div');
            noResultsMsg.className = 'no-results-message';
            noResultsMsg.style.textAlign = 'center';
            noResultsMsg.style.padding = '40px';
            noResultsMsg.style.color = 'var(--gray)';
            const menuContainer = document.querySelector('.menu .container');
            if (menuContainer) menuContainer.appendChild(noResultsMsg);
        }
        noResultsMsg.innerHTML = `<i class="fas fa-search" style="font-size: 3rem; margin-bottom: 15px; display: block; color: var(--secondary);"></i>
                                   <p>No menu items found matching "<strong>${escapeHtml(searchTerm)}</strong>"</p>
                                   <p style="font-size: 0.9rem; margin-top: 10px;">Try searching for something else or browse our categories</p>`;
        noResultsMsg.style.display = 'block';
    } else if (noResultsMsg) {
        noResultsMsg.style.display = 'none';
    }
}

// Add event listener for search input
if (menuSearchInput) {
    let searchTimeout;
    menuSearchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            filterMenuBySearch();
        }, 300);
    });
}

// Create loading skeleton if not exists
if (!menuLoadingSkeleton) {
    const skeletonDiv = document.createElement('div');
    skeletonDiv.id = 'menuLoadingSkeleton';
    skeletonDiv.className = 'menu-loading-skeleton';
    skeletonDiv.innerHTML = `
        <div class="skeleton-grid">
            ${Array(8).fill(`
                <div class="skeleton-card">
                    <div class="skeleton-image"></div>
                    <div class="skeleton-title"></div>
                    <div class="skeleton-price"></div>
                    <div class="skeleton-description"></div>
                </div>
            `).join('')}
        </div>
    `;
    const menuSection = document.querySelector('.menu');
    if (menuSection) {
        const container = menuSection.querySelector('.container');
        if (container) container.appendChild(skeletonDiv);
    }
}

// Fetch menu items from backend
async function fetchMenuItems() {
    showLoadingSkeleton(true);
    try {
        const response = await fetch(`${API_BASE_URL}/menu`);
        if (!response.ok) throw new Error('Failed to fetch menu');
        menuItems = await response.json();
        renderAllMenuSections();
    } catch (error) {
        console.error('Error fetching menu:', error);
        showToast('Backend not available. Using offline menu.', 'error');
        loadFallbackMenuData();
    } finally {
        showLoadingSkeleton(false);
    }
}

// Show/hide loading skeleton
function showLoadingSkeleton(show) {
    const skeleton = document.getElementById('menuLoadingSkeleton');
    const menuContent = document.querySelector('.menu-content-container');
    if (skeleton) {
        skeleton.style.display = show ? 'block' : 'none';
    }
    if (menuContent) {
        menuContent.style.display = show ? 'none' : 'block';
    }
}

// Create menu content container if not exists
function ensureMenuContainer() {
    let menuContentContainer = document.querySelector('.menu-content-container');
    if (!menuContentContainer) {
        const menuSection = document.querySelector('.menu .container');
        if (menuSection) {
            menuContentContainer = document.createElement('div');
            menuContentContainer.className = 'menu-content-container';
            menuSection.appendChild(menuContentContainer);
        }
    }
    return menuContentContainer;
}

function renderAllMenuSections() {
    const menuContentContainer = ensureMenuContainer();
    if (!menuContentContainer) return;
    
    menuContentContainer.innerHTML = '';
    
    // Group items by category
    const categories = {};
    menuItems.forEach(item => {
        if (!categories[item.category]) {
            categories[item.category] = [];
        }
        categories[item.category].push(item);
    });
    
    // Render each category
    Object.keys(categories).forEach(categoryKey => {
        const categoryData = {
            title: getCategoryTitle(categoryKey),
            icon: getCategoryIcon(categoryKey),
            subtitle: getCategorySubtitle(categoryKey),
            items: categories[categoryKey]
        };
        const section = createMenuSection(categoryKey, categoryData);
        menuContentContainer.appendChild(section);
    });
    
    attachMenuDelegation(menuContentContainer);
    initLightbox();
}

function getCategoryTitle(categoryKey) {
    const titles = {
        BreakFast: 'Break Fast',
        Lunch: 'Lunch',
        classics: 'Classics',
        Drinks: 'Drinks',
        HotBeverages: 'Hot Beverages'
    };
    return titles[categoryKey] || categoryKey;
}

function getCategoryIcon(categoryKey) {
    const icons = {
        BreakFast: 'fas fa-hamburger',
        Lunch: 'fas fa-drumstick-bite',
        classics: 'fas fa-star',
        Drinks: 'fas fa-glass-martini',
        HotBeverages: 'fas fa-mug-hot'
    };
    return icons[categoryKey] || 'fas fa-utensils';
}

function getCategorySubtitle(categoryKey) {
    const subtitles = {
        Lunch: 'Served with papa and moroho/chakalaka',
        BreakFast: 'Served with a side of fries'
    };
    return subtitles[categoryKey] || '';
}

// Create menu section
function createMenuSection(categoryKey, categoryData) {
    const section = document.createElement('div');
    section.className = 'menu-section';
    section.id = `${categoryKey}-section`;
    
    const subtitleHTML = categoryData.subtitle ? `<p class="menu-section-subtitle">${categoryData.subtitle}</p>` : '';
    
    section.innerHTML = `
        <h3 class="menu-section-title">
            <i class="${categoryData.icon}"></i> ${categoryData.title}
        </h3>
        ${subtitleHTML}
        <div class="menu-category"></div>
    `;
    
    const menuCategory = section.querySelector('.menu-category');
    categoryData.items.forEach(item => {
        menuCategory.appendChild(createMenuItem(item));
    });
    
    return section;
}

// Create menu item
function createMenuItem(item) {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item-simple';
    menuItem.dataset.category = item.category;
    menuItem.dataset.id = item._id || '';
    
    const sizesHTML = item.sizes && item.sizes.length ? `
        <div class="size-selector">
            ${item.sizes.map((s, i) => `
                <button class="size-btn${i === 0 ? ' active' : ''}" data-price="${s.price}" data-label="${s.label}">
                    ${s.label}<span class="size-price">${s.price}</span>
                </button>`).join('')}
        </div>` : '';
    
    const basePrice = item.sizes && item.sizes.length ? item.sizes[0].price : item.price;
    const basePriceNum = parseInt(String(basePrice).replace(/\D/g, '')) || 0;
    menuItem.dataset.basePrice = basePriceNum;
    
    const starchHTML = item.starchOptions && item.starchOptions.length ? `
        <div class="starch-selector">
            <div class="starch-btns">
                ${item.starchOptions.map((s, i) => {
                    const starchPrice = basePriceNum + (s.addon || 0);
                    const priceTag = `<span class="starch-price">M${starchPrice}</span>`;
                    return `<button class="starch-btn${i === 0 ? ' active' : ''}" data-starch="${s.label}" data-addon="${s.addon || 0}">
                        ${s.label}${priceTag}
                    </button>`;
                }).join('')}
            </div>
        </div>` : '';
    
    const flavorsHTML = item.flavors && item.flavors.length ? `
        <div class="flavor-selector">
            <hr>
            <div class="flavor-btns">
                ${item.flavors.map((f, i) => `
                    <button class="flavor-btn${i === 0 ? ' active' : ''}"
                        data-flavor="${f.label}"
                        style="--flavor-color: ${f.color || '#f97316'};">
                        <span class="flavor-name">${f.label}</span>
                    </button>`).join('')}
            </div>
        </div>` : '';
    
    const imageUrl = getImageUrl(item.image, item.name);
    
    menuItem.innerHTML = `
        <div class="menu-item-image">
            <img src="${imageUrl}" 
                 alt="${escapeHtml(item.name)}" 
                 loading="lazy" 
                 onerror="handleImageError(this, '${escapeHtml(item.name)}')">
        </div>
        <div class="menu-item-simple-header">
            <h4>${escapeHtml(item.name)}</h4>
            <div class="price">${basePrice}</div>
        </div>
        ${sizesHTML}
        ${flavorsHTML}
        ${starchHTML}
        <div class="menu-item-simple-header">
            <p>${escapeHtml(item.description || 'No description available')}</p>
            <button class="orderBtn">Order</button>
        </div>
    `;
    
    return menuItem;
}

// Escape HTML
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Attach event listeners
function attachMenuDelegation(container) {
    if (!container) return;
    
    container.addEventListener('click', function(e) {
        // Order button
        const orderBtn = e.target.closest('.orderBtn');
        if (orderBtn) {
            const menuItem = orderBtn.closest('.menu-item-simple');
            const itemName = menuItem.querySelector('h4').textContent;
            const itemPrice = menuItem.querySelector('.price').textContent;
            
            const activeSize = menuItem.querySelector('.size-btn.active');
            const activeStarch = menuItem.querySelector('.starch-btn.active');
            const activeFlavor = menuItem.querySelector('.flavor-btn.active');
            
            let displayName = itemName;
            if (activeFlavor) displayName += ` (${activeFlavor.dataset.flavor})`;
            if (activeSize) displayName += ` - ${activeSize.dataset.label}`;
            if (activeStarch) displayName += ` + ${activeStarch.dataset.starch}`;
            
            initializeOrderModal(displayName, itemPrice);
            if (orderModal) orderModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            return;
        }
        
        // Size button
        const sizeBtn = e.target.closest('.size-btn');
        if (sizeBtn) {
            const selector = sizeBtn.closest('.size-selector');
            selector.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
            sizeBtn.classList.add('active');
            const menuItem = sizeBtn.closest('.menu-item-simple');
            menuItem.querySelector('.price').textContent = sizeBtn.dataset.price;
            return;
        }
        
        // Flavor button
        const flavorBtn = e.target.closest('.flavor-btn');
        if (flavorBtn) {
            const selector = flavorBtn.closest('.flavor-selector');
            selector.querySelectorAll('.flavor-btn').forEach(b => b.classList.remove('active'));
            flavorBtn.classList.add('active');
            return;
        }
        
        // Starch button
        const starchBtn = e.target.closest('.starch-btn');
        if (starchBtn) {
            const selector = starchBtn.closest('.starch-selector');
            selector.querySelectorAll('.starch-btn').forEach(b => b.classList.remove('active'));
            starchBtn.classList.add('active');
            const menuItem = starchBtn.closest('.menu-item-simple');
            const base = parseInt(menuItem.dataset.basePrice) || 0;
            const addon = parseInt(starchBtn.dataset.addon) || 0;
            menuItem.querySelector('.price').textContent = `M${base + addon}`;
            return;
        }
        
        // Image lightbox
        const imgContainer = e.target.closest('.menu-item-image');
        if (imgContainer) {
            e.stopPropagation();
            const allContainers = Array.from(document.querySelectorAll('.menu-item-image'));
            openLightbox(allContainers.indexOf(imgContainer));
            return;
        }
    });
}

// Filter menu by category
function filterMenuByCategory(category) {
    const sections = document.querySelectorAll('.menu-section');
    sections.forEach(sec => {
        if (category === 'all' || sec.id === `${category}-section`) {
            sec.style.display = '';
        } else {
            sec.style.display = 'none';
        }
    });
    // Re-apply search filter after category change
    filterMenuBySearch();
}

// Order modal functions
let currentItem = { name: '', basePrice: 0, price: '' };

function initializeOrderModal(itemName, priceText) {
    currentItem.name = itemName;
    currentItem.basePrice = parseInt(String(priceText).replace(/\D/g, '')) || 0;
    currentItem.price = priceText;
    
    const modalItemName = document.getElementById('modalItemName');
    const modalItemPrice = document.getElementById('modalItemPrice');
    const summaryItemName = document.getElementById('summaryItemName');
    const summaryUnitPrice = document.getElementById('summaryUnitPrice');
    
    if (modalItemName) modalItemName.textContent = itemName;
    if (modalItemPrice) modalItemPrice.textContent = priceText;
    if (summaryItemName) summaryItemName.textContent = itemName;
    if (summaryUnitPrice) summaryUnitPrice.textContent = priceText;
    
    const orderQuantity = document.getElementById('orderQuantity');
    if (orderQuantity) orderQuantity.value = 1;
    updateTotalPrice();
    
    const orderForm = document.getElementById('orderForm');
    if (orderForm) orderForm.reset();
}

function updateTotalPrice() {
    const quantity = parseInt(document.getElementById('orderQuantity')?.value) || 1;
    const total = currentItem.basePrice * quantity;
    const summaryQuantity = document.getElementById('summaryQuantity');
    const summaryTotalPrice = document.getElementById('summaryTotalPrice');
    const modalItemPrice = document.getElementById('modalItemPrice');
    
    if (summaryQuantity) summaryQuantity.textContent = quantity;
    if (summaryTotalPrice) summaryTotalPrice.textContent = `M${total}`;
    
    if (modalItemPrice) {
        if (quantity > 1) {
            modalItemPrice.textContent = `M${currentItem.basePrice} × ${quantity} = M${total}`;
        } else {
            modalItemPrice.textContent = `M${currentItem.basePrice}`;
        }
    }
}

function generateOrderNumber() {
    const prefix = 'SB';
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `${prefix}-${timestamp}-${random}`;
}

async function sendOrderEmail(order) {
    try {
        const result = await emailjs.send(
            'service_zb4l9h9',
            'template_89n8r6r',
            {
                to_email: 'montsikhotso@gmail.com',
                order_number: order.orderNumber,
                timestamp: order.timestamp,
                customer_name: order.customerName,
                customer_phone: order.customerPhone,
                item: order.item,
                quantity: order.quantity,
                total: order.total,
                special_instructions: order.specialInstructions || 'None'
            }
        );
        console.log('Order email sent:', result.text);
        return true;
    } catch (err) {
        console.warn('Email send failed:', err);
        return false;
    }
}

// Carousel functions
let currentSlide = 0;
let slideInterval;

function updateCarousel() {
    const carouselSlides = document.querySelector('.carousel-slides');
    const carouselDots = document.querySelectorAll('.carousel-dot');
    if (carouselSlides) {
        carouselSlides.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    carouselDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
    const currentSlideEl = document.querySelector('.current-slide');
    if (currentSlideEl) currentSlideEl.textContent = currentSlide + 1;
}

function nextSlide() {
    const totalSlides = document.querySelectorAll('.carousel-dot').length;
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    const totalSlides = document.querySelectorAll('.carousel-dot').length;
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

function startAutoPlay() {
    if (slideInterval) clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
}

function stopAutoPlay() {
    if (slideInterval) clearInterval(slideInterval);
}

// Lightbox functions
let allMenuImages = [];
let currentImageIndex = 0;

function collectMenuImages() {
    allMenuImages = [];
    const menuItemImages = document.querySelectorAll('.menu-item-image img');
    menuItemImages.forEach((img, index) => {
        const menuItem = img.closest('.menu-item-simple');
        const itemName = menuItem?.querySelector('h4')?.textContent || 'Menu Item';
        allMenuImages.push({
            src: img.getAttribute('src'),
            alt: img.getAttribute('alt') || itemName,
            caption: itemName,
            index
        });
    });
}

function openLightbox(imageIndex) {
    if (!allMenuImages[imageIndex]) return;
    currentImageIndex = imageIndex;
    const image = allMenuImages[imageIndex];
    const lightbox = document.getElementById('imageLightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    
    if (lightboxImage) lightboxImage.src = image.src;
    if (lightboxCaption) lightboxCaption.textContent = image.caption;
    if (lightbox) lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('imageLightbox');
    if (lightbox) lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % allMenuImages.length;
    openLightbox(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + allMenuImages.length) % allMenuImages.length;
    openLightbox(currentImageIndex);
}

function initLightbox() {
    collectMenuImages();
}

// Make handleImageError globally available
window.handleImageError = handleImageError;

// Admin Panel Functions
async function adminLogin() {
    const username = document.getElementById('adminUsername')?.value;
    const password = document.getElementById('adminPassword')?.value;
    
    if (!username || !password) {
        showToast('Please enter username and password', 'error');
        return;
    }
    
    try {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        
        if (!response.ok) throw new Error('Invalid credentials');
        
        const data = await response.json();
        adminToken = data.token;
        localStorage.setItem('adminToken', adminToken);
        showAdminDashboard();
        showToast('Login successful!', 'success');
    } catch (error) {
        showToast('Login failed: ' + error.message, 'error');
    }
}

function showAdminDashboard() {
    const adminLogin = document.getElementById('adminLogin');
    const adminDashboard = document.getElementById('adminDashboard');
    if (adminLogin) adminLogin.style.display = 'none';
    if (adminDashboard) adminDashboard.style.display = 'block';
    loadAdminMenuItems();
}

function logoutAdmin() {
    adminToken = null;
    localStorage.removeItem('adminToken');
    const adminLogin = document.getElementById('adminLogin');
    const adminDashboard = document.getElementById('adminDashboard');
    if (adminLogin) adminLogin.style.display = 'block';
    if (adminDashboard) adminDashboard.style.display = 'none';
    showToast('Logged out successfully', 'success');
}

async function loadAdminMenuItems() {
    try {
        const response = await fetch(`${API_BASE_URL}/menu`);
        if (!response.ok) throw new Error('Failed to load menu');
        const items = await response.json();
        renderAdminMenuItems(items);
    } catch (error) {
        showToast('Error loading menu items: ' + error.message, 'error');
    }
}

function renderAdminMenuItems(items) {
    const container = document.getElementById('adminMenuItems');
    if (!container) return;
    container.innerHTML = '';
    
    items.forEach(item => {
        const imageUrl = getImageUrl(item.image, item.name);
        const card = document.createElement('div');
        card.className = 'admin-menu-item';
        card.innerHTML = `
            <img src="${imageUrl}" alt="${escapeHtml(item.name)}" onerror="handleImageError(this, '${escapeHtml(item.name)}')">
            <h4>${escapeHtml(item.name)}</h4>
            <p>${escapeHtml(item.description || 'No description')}</p>
            <p><strong>Price:</strong> ${item.price}</p>
            <p><strong>Category:</strong> ${item.category}</p>
            <div class="admin-menu-item-actions">
                <button class="edit-item-btn" data-id="${item._id}">Edit</button>
                <button class="delete-item-btn" data-id="${item._id}">Delete</button>
            </div>
        `;
        container.appendChild(card);
    });
    
    document.querySelectorAll('.edit-item-btn').forEach(btn => {
        btn.addEventListener('click', () => editMenuItem(btn.dataset.id));
    });
    document.querySelectorAll('.delete-item-btn').forEach(btn => {
        btn.addEventListener('click', () => deleteMenuItem(btn.dataset.id));
    });
}

async function addMenuItem(formData) {
    try {
        const response = await fetch(`${API_BASE_URL}/menu`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${adminToken}`
            },
            body: JSON.stringify(formData)
        });
        
        if (!response.ok) throw new Error('Failed to add menu item');
        
        showToast('Menu item added successfully!', 'success');
        closeMenuItemModal();
        loadAdminMenuItems();
        fetchMenuItems();
    } catch (error) {
        showToast('Error adding menu item: ' + error.message, 'error');
    }
}

async function updateMenuItem(id, formData) {
    try {
        const response = await fetch(`${API_BASE_URL}/menu/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${adminToken}`
            },
            body: JSON.stringify(formData)
        });
        
        if (!response.ok) throw new Error('Failed to update menu item');
        
        showToast('Menu item updated successfully!', 'success');
        closeMenuItemModal();
        loadAdminMenuItems();
        fetchMenuItems();
    } catch (error) {
        showToast('Error updating menu item: ' + error.message, 'error');
    }
}

async function deleteMenuItem(id) {
    if (!confirm('Are you sure you want to delete this menu item?')) return;
    
    try {
        const response = await fetch(`${API_BASE_URL}/menu/${id}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${adminToken}` }
        });
        
        if (!response.ok) throw new Error('Failed to delete menu item');
        
        showToast('Menu item deleted successfully!', 'success');
        loadAdminMenuItems();
        fetchMenuItems();
    } catch (error) {
        showToast('Error deleting menu item: ' + error.message, 'error');
    }
}

let editingItemId = null;

function openAddMenuItemModal() {
    editingItemId = null;
    const modalTitle = document.getElementById('menuItemModalTitle');
    const form = document.getElementById('menuItemForm');
    if (modalTitle) modalTitle.textContent = 'Add Menu Item';
    if (form) form.reset();
    const menuItemModal = document.getElementById('menuItemModal');
    if (menuItemModal) menuItemModal.classList.add('active');
}

async function editMenuItem(id) {
    editingItemId = id;
    try {
        const response = await fetch(`${API_BASE_URL}/menu/${id}`);
        if (!response.ok) throw new Error('Failed to load menu item');
        
        const item = await response.json();
        
        const modalTitle = document.getElementById('menuItemModalTitle');
        const itemName = document.getElementById('itemName');
        const itemPrice = document.getElementById('itemPrice');
        const itemImage = document.getElementById('itemImage');
        const itemDescription = document.getElementById('itemDescription');
        const itemCategory = document.getElementById('itemCategory');
        const itemSizes = document.getElementById('itemSizes');
        const itemFlavors = document.getElementById('itemFlavors');
        const itemStarchOptions = document.getElementById('itemStarchOptions');
        
        if (modalTitle) modalTitle.textContent = 'Edit Menu Item';
        if (itemName) itemName.value = item.name;
        if (itemPrice) itemPrice.value = item.price;
        if (itemImage) itemImage.value = item.image;
        if (itemDescription) itemDescription.value = item.description || '';
        if (itemCategory) itemCategory.value = item.category;
        if (itemSizes) itemSizes.value = item.sizes ? JSON.stringify(item.sizes, null, 2) : '';
        if (itemFlavors) itemFlavors.value = item.flavors ? JSON.stringify(item.flavors, null, 2) : '';
        if (itemStarchOptions) itemStarchOptions.value = item.starchOptions ? JSON.stringify(item.starchOptions, null, 2) : '';
        
        const menuItemModal = document.getElementById('menuItemModal');
        if (menuItemModal) menuItemModal.classList.add('active');
    } catch (error) {
        showToast('Error loading menu item: ' + error.message, 'error');
    }
}

function closeMenuItemModal() {
    const menuItemModal = document.getElementById('menuItemModal');
    if (menuItemModal) menuItemModal.classList.remove('active');
    editingItemId = null;
}

function handleMenuItemSubmit(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('itemName')?.value,
        price: document.getElementById('itemPrice')?.value,
        image: document.getElementById('itemImage')?.value,
        description: document.getElementById('itemDescription')?.value,
        category: document.getElementById('itemCategory')?.value,
        sizes: parseJSONField(document.getElementById('itemSizes')?.value),
        flavors: parseJSONField(document.getElementById('itemFlavors')?.value),
        starchOptions: parseJSONField(document.getElementById('itemStarchOptions')?.value)
    };
    
    if (!formData.name || !formData.price || !formData.image || !formData.category) {
        showToast('Please fill in all required fields', 'error');
        return;
    }
    
    if (editingItemId) {
        updateMenuItem(editingItemId, formData);
    } else {
        addMenuItem(formData);
    }
}

function parseJSONField(value) {
    if (!value || !value.trim()) return undefined;
    try {
        return JSON.parse(value);
    } catch (e) {
        console.warn('Invalid JSON:', value);
        return undefined;
    }
}

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.style.backgroundColor = type === 'success' ? '#1a1' : '#c8102e';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// Dark mode functions
function enableDarkMode() {
    document.body.classList.add('dark-mode');
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.classList.add('active');
        const icon = darkModeToggle.querySelector('i');
        const span = darkModeToggle.querySelector('span');
        if (icon) icon.className = 'fas fa-sun';
        if (span) span.textContent = 'Light Mode';
    }
    localStorage.setItem('theme', 'dark');
}

function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.classList.remove('active');
        const icon = darkModeToggle.querySelector('i');
        const span = darkModeToggle.querySelector('span');
        if (icon) icon.className = 'fas fa-moon';
        if (span) span.textContent = 'Dark Mode';
    }
    localStorage.setItem('theme', 'light');
}

function initializeDarkMode() {
    const savedTheme = localStorage.getItem('theme');
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    if (savedTheme === 'dark') {
        enableDarkMode();
    } else if (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        enableDarkMode();
    }
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            if (document.body.classList.contains('dark-mode')) {
                disableDarkMode();
            } else {
                enableDarkMode();
            }
        });
    }
}

// Fallback menu data
function loadFallbackMenuData() {
    menuItems = [
        { name: "Break Fast Sandwich", price: "M35", image: "", description: "Chicken Mayo, baked beans, Vianna, Boiled Eggs", category: "BreakFast" },
        { name: "Break Fast Burger", price: "M25", image: "", description: "Ham, Cheese, Scrambled eggs, lettuce", category: "BreakFast" },
        { name: "Chicken Quarter Leg", price: "M50", image: "", description: "Juicy chicken portions with traditional sides", category: "Lunch" },
        { name: "Pork", price: "M50", image: "", description: "Tender pork cuts", category: "Lunch" },
        { name: "Fries", price: "M15", image: "", description: "Crispy golden fries", category: "classics" },
        { name: "Coca-Cola", price: "M15", image: "", description: "The classic refreshing cola", category: "Drinks" }
    ];
    renderAllMenuSections();
}

// Initialize all event listeners
function initializeEventListeners() {
    // Tab buttons
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterMenuByCategory(btn.getAttribute('data-tab'));
        });
    });
    
    // Carousel
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); startAutoPlay(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); startAutoPlay(); });
    
    const carouselDots = document.querySelectorAll('.carousel-dot');
    carouselDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel();
            startAutoPlay();
        });
    });
    
    const carousel = document.querySelector('.hero-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopAutoPlay);
        carousel.addEventListener('mouseleave', startAutoPlay);
    }
    
    // Order form
    const increaseQty = document.getElementById('increaseQty');
    const decreaseQty = document.getElementById('decreaseQty');
    const orderQuantity = document.getElementById('orderQuantity');
    
    if (increaseQty) {
        increaseQty.addEventListener('click', () => {
            if (orderQuantity) {
                let value = parseInt(orderQuantity.value) || 1;
                if (value < 10) orderQuantity.value = value + 1;
                updateTotalPrice();
            }
        });
    }
    
    if (decreaseQty) {
        decreaseQty.addEventListener('click', () => {
            if (orderQuantity) {
                let value = parseInt(orderQuantity.value) || 1;
                if (value > 1) orderQuantity.value = value - 1;
                updateTotalPrice();
            }
        });
    }
    
    if (orderQuantity) {
        orderQuantity.addEventListener('input', () => {
            let value = parseInt(orderQuantity.value) || 1;
            if (value < 1) value = 1;
            if (value > 10) value = 10;
            orderQuantity.value = value;
            updateTotalPrice();
        });
    }
    
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = document.getElementById('submitOrder');
            const customerName = document.getElementById('customerName')?.value.trim();
            const customerPhone = document.getElementById('customerPhone')?.value.trim();
            const quantity = parseInt(document.getElementById('orderQuantity')?.value) || 1;
            const specialInstructions = document.getElementById('specialInstructions')?.value.trim();
            
            if (!customerName || !customerPhone) {
                alert('Please fill in your name and phone number.');
                return;
            }
            
            if (submitBtn) {
                submitBtn.classList.add('loading');
                submitBtn.disabled = true;
            }
            
            const orderNumber = generateOrderNumber();
            const total = currentItem.basePrice * quantity;
            const timestamp = new Date().toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' });
            
            const orderDetails = {
                orderNumber, item: currentItem.name, quantity, total: `M${total}`,
                customerName, customerPhone, specialInstructions, timestamp
            };
            
            await sendOrderEmail(orderDetails);
            
            const successOrderNumber = document.getElementById('successOrderNumber');
            const successItemName = document.getElementById('successItemName');
            const successQuantity = document.getElementById('successQuantity');
            const successTotalPrice = document.getElementById('successTotalPrice');
            const successPhone = document.getElementById('successPhone');
            
            if (successOrderNumber) successOrderNumber.textContent = orderNumber;
            if (successItemName) successItemName.textContent = `${currentItem.name} × ${quantity}`;
            if (successQuantity) successQuantity.textContent = quantity;
            if (successTotalPrice) successTotalPrice.textContent = `M${total}`;
            if (successPhone) successPhone.textContent = customerPhone;
            
            if (orderModal) orderModal.classList.remove('active');
            if (successModal) successModal.classList.add('active');
            
            if (submitBtn) {
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
            }
        });
    }
    
    // Modal close buttons
    const closeModal = document.getElementById('closeModal');
    const cancelOrder = document.getElementById('cancelOrder');
    const closeSuccess = document.getElementById('closeSuccess');
    
    if (closeModal) closeModal.addEventListener('click', () => {
        if (orderModal) orderModal.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    if (cancelOrder) cancelOrder.addEventListener('click', () => {
        if (orderModal) orderModal.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    if (closeSuccess) closeSuccess.addEventListener('click', () => {
        if (successModal) successModal.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    if (orderModal) {
        orderModal.addEventListener('click', (e) => {
            if (e.target === orderModal) {
                orderModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    if (successModal) {
        successModal.addEventListener('click', (e) => {
            if (e.target === successModal) {
                successModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Lightbox
    const lightboxClose = document.getElementById('lightboxClose');
    const prevLightbox = document.getElementById('prevLightbox');
    const nextLightbox = document.getElementById('nextLightbox');
    const imageLightbox = document.getElementById('imageLightbox');
    
    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (prevLightbox) prevLightbox.addEventListener('click', prevImage);
    if (nextLightbox) nextLightbox.addEventListener('click', nextImage);
    if (imageLightbox) {
        imageLightbox.addEventListener('click', (e) => {
            if (e.target === imageLightbox) closeLightbox();
        });
    }
    
    // Admin panel
    if (adminPanelLink) {
        adminPanelLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (adminPanel) adminPanel.scrollIntoView({ behavior: 'smooth' });
            if (adminToken) {
                showAdminDashboard();
            }
        });
    }
    
    const adminLoginBtn = document.getElementById('adminLoginBtn');
    const adminLogoutBtn = document.getElementById('adminLogoutBtn');
    const addMenuItemBtn = document.getElementById('addMenuItemBtn');
    const refreshMenuBtn = document.getElementById('refreshMenuBtn');
    const closeMenuItemModalBtn = document.getElementById('closeMenuItemModal');
    const cancelMenuItemBtn = document.getElementById('cancelMenuItemBtn');
    const menuItemForm = document.getElementById('menuItemForm');
    
    if (adminLoginBtn) adminLoginBtn.addEventListener('click', adminLogin);
    if (adminLogoutBtn) adminLogoutBtn.addEventListener('click', logoutAdmin);
    if (addMenuItemBtn) addMenuItemBtn.addEventListener('click', openAddMenuItemModal);
    if (refreshMenuBtn) {
        refreshMenuBtn.addEventListener('click', () => {
            loadAdminMenuItems();
            fetchMenuItems();
        });
    }
    if (closeMenuItemModalBtn) closeMenuItemModalBtn.addEventListener('click', closeMenuItemModal);
    if (cancelMenuItemBtn) cancelMenuItemBtn.addEventListener('click', closeMenuItemModal);
    if (menuItemForm) menuItemForm.addEventListener('submit', handleMenuItemSubmit);
    
    // Mobile menu
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => navMenu.classList.toggle('active'));
        document.addEventListener('click', (event) => {
            if (navMenu.classList.contains('active') && !navMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
                navMenu.classList.remove('active');
            }
        });
    }
    
    // Smooth scroll
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (targetId === '#admin') {
                if (adminPanel) adminPanel.scrollIntoView({ behavior: 'smooth' });
            } else {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({ top: targetElement.offsetTop - 80, behavior: 'smooth' });
                }
            }
            if (navMenu) navMenu.classList.remove('active');
        });
    });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    const totalSlides = document.querySelectorAll('.carousel-dot').length;
    const totalSlidesEl = document.querySelector('.total-slides');
    if (totalSlidesEl) totalSlidesEl.textContent = totalSlides;
    updateCarousel();
    startAutoPlay();
    
    initializeDarkMode();
    initializeEventListeners();
    fetchMenuItems();
});