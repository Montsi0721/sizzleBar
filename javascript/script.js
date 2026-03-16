const menuData = {
    BreakFast: {
        title: "Break Fast",
        icon: "fas fa-hamburger",
        subtitle: "Served with a side of fries",
        items: [
            {
                name: "Break Fast Sandwich",
                price: "M35",
                image: "../assets/break-fast1.jpg",
                description: "Chicken Mayo, baked beans, Vianna, Boiled Eggs",
                category: "Break Fast"
            },
            {
                name: "Break Fast Sandwich",
                price: "M35",
                image: "../assets/break-fast2.jpg",
                description: "Chicken Mayo, Green Salad, vianna, Scrambled eggs",
                category: "Break Fast"
            },
            {
                name: "Break Fast Sandwic",
                price: "M20",
                image: "../assets/break-fast3.jpeg",
                description: "Chicken Mayo, Vegetables",
                category: "Break Fast"
            },
            {
                name: "Break Fast Burger",
                price: "M25",
                image: "../assets/break-fast4.jpeg",
                description: "Ham, Cheeze, Scrambled eggs, lettus",
                category: "Break Fast"
            },
            {
                name: "Break Fast Mini Pizza",
                price: "M20",
                image: "../assets/break-fast5.jpeg",
                description: "Chicken, Ham, Vegetables",
                category: "Break Fast"
            }
        ]
    },
    Lunch: {
        title: "Lunch",
        icon: "fas fa-drumstick-bite",
        subtitle: "Served with papa and moroho/chakalaka",
        items: [
            {
                name: "Wors",
                price: "M30",
                image: "../assets/lunch1.jpeg",
                description: "Traditional South African sausage with sides",
                category: "Lunch",
                starchOptions: [{label:"Papa",addon:5},{label:"Samp",addon:10},{label:"Rice",addon:10},{label:"Leqebekoane",addon:5}]
            },
            {
                name: "Chicken",
                price: "M35",
                image: "../assets/lunch2.jpeg",
                description: "Juicy chicken portions with traditional sides",
                category: "Lunch",
                starchOptions: [{label:"Papa",addon:5},{label:"Samp",addon:10},{label:"Rice",addon:10},{label:"Leqebekoane",addon:5}]
            },
            {
                name: "Pork",
                price: "M40",
                image: "../assets/lunch3.jpeg",
                description: "Tender pork cuts served with papa and moroho/chakalaka",
                category: "Lunch",
                starchOptions: [{label:"Papa",addon:5},{label:"Samp",addon:10},{label:"Rice",addon:10},{label:"Leqebekoane",addon:5}]
            },
            {
                name: "Beef",
                price: "M45",
                image: "../assets/lunch4.jpeg",
                description: "Flavorful beef cuts with traditional accompaniments",
                category: "Lunch",
                starchOptions: [{label:"Papa",addon:5},{label:"Samp",addon:10},{label:"Rice",addon:10},{label:"Leqebekoane",addon:5}]
            },
            {
                name: "Oxtail",
                price: "M45",
                image: "../assets/lunch5.jpeg",
                description: "Slow-cooked tender oxtail with rich sauce",
                category: "Lunch",
                starchOptions: [{label:"Papa",addon:5},{label:"Samp",addon:10},{label:"Rice",addon:10},{label:"Leqebekoane",addon:5}]
            },
            {
                name: "Likahare",
                price: "M45",
                image: "../assets/lunch6.jpeg",
                description: "Traditional tripe served with accompaniments",
                category: "Lunch",
                starchOptions: [{label:"Papa",addon:5},{label:"Samp",addon:10},{label:"Rice",addon:10},{label:"Leqebekoane",addon:5}]
            },
            {
                name: "Chicken Livers",
                price: "M45",
                image: "../assets/lunch7.jpeg",
                description: "Spicy peri-peri chicken livers with sides",
                category: "Lunch",
                starchOptions: [{label:"Papa",addon:5},{label:"Samp",addon:10},{label:"Rice",addon:10},{label:"Leqebekoane",addon:5}]
            },
            {
                name: "Chicken Hearts",
                price: "M45",
                image: "../assets/lunch8.jpeg",
                description: "Grilled chicken hearts seasoned to perfection",
                category: "Lunch",
                starchOptions: [{label:"Papa",addon:5},{label:"Leqebekoane",addon:5}]
            },
            {
                name: "Linaoa",
                price: "M45",
                image: "../assets/lunch9.jpeg",
                description: "Traditional beans served with accompaniments",
                category: "Lunch",
                starchOptions: [{label:"Papa",addon:5},{label:"Leqebekoane",addon:5}]
            }
        ]
    },
    classics: {
        title: "Classics",
        icon: "fas fa-star",
        subtitle: "",
        items: [
            {
                name: "Fries",
                price: "From M15",
                image: "../assets/fries.jpeg",
                description: "",
                category: "classics",
                sizes: [
                    { label: "Small",  price: "M15" },
                    { label: "Medium", price: "M20" },
                    { label: "Large",  price: "M25" }
                ]
            },
            {
                name: "Chinese Food",
                price: "From M15",
                image: "../assets/chinese-food.jpeg",
                description: "",
                category: "classics",
                sizes: [
                    { label: "Small",  price: "M20" },
                    { label: "Medium", price: "M25" },
                    { label: "Large",  price: "M30" }
                ]
            },
            {
                name: "Lekoenya",
                price: "M2",
                image: "../assets/lekoenya.jpg",
                description: "",
                category: "classics"
            },
            {
                name: "Bread Roll",
                price: "M10",
                image: "../assets/bread-roll.jpeg",
                description: "",
                category: "classics"
            },
            {
                name: "Russian",
                price: "M8",
                image: "../assets/russian.jpeg",
                description: "",
                category: "classics"
            },
            {
                name: "Fish",
                price: "From M15",
                image: "../assets/fish.jpg",
                description: "",
                category: "classics",
                sizes: [
                    { label: "Small",  price: "M20" },
                    { label: "Medium", price: "M40" },
                    { label: "Large",  price: "M50" }
                ]
            }
        ]
    },
    Drinks: {
        title: "Drinks",
        icon: "fas fa-glass-martini",
        subtitle: "",
        items: [
            {
                name: "Coca-Cola",
                price: "From M12",
                image: "../assets/coca-cola.jpeg",
                description: "The classic refreshing cola",
                category: "Drinks",
                sizes: [
                    { label: "500ml",  price: "M12" },
                    { label: "1 Litre", price: "M18" },
                    { label: "2 Litre",  price: "M28" }
                ],
                flavors: [
                    { label: "Original", color: "#c8102e" },
                    { label: "Zero Sugar", color: "#1a1a1a" }
                ]
            },
            {
                name: "Fanta",
                price: "From M12",
                image: "../assets/fanta.jpeg",
                description: "Fruity and refreshing",
                category: "Drinks",
                sizes: [
                    { label: "500ml",  price: "M12" },
                    { label: "1 Litre", price: "M18" },
                    { label: "2 Litre",  price: "M28" }
                ],
                flavors: [
                    { label: "Orange", color: "#f97316" },
                    { label: "Grape", color: "#7c3aed" },
                    { label: "Pineapple", color: "#eab308" },
                    { label: "Strawberry", color: "#e11d48" }
                ]
            },
            {
                name: "Sprite",
                price: "From M12",
                image: "../assets/fanta.jpeg",
                description: "Crisp lemon-lime refreshment",
                category: "Drinks",
                sizes: [
                    { label: "500ml",  price: "M12" },
                    { label: "1 Litre", price: "M18" },
                    { label: "2 Litre",  price: "M28" }
                ],
                flavors: [
                    { label: "Lemon-Lime", color: "#84cc16" },
                    { label: "Cranberry", color: "#be123c" }
                ]
            },
            {
                name: "Stoney Ginger Beer",
                price: "From M12",
                image: "../assets/stoney.jpeg",
                description: "Bold and spicy ginger kick",
                category: "Drinks",
                sizes: [
                    { label: "500ml",  price: "M12" },
                    { label: "1 Litre", price: "M18" },
                    { label: "2 Litre",  price: "M28" }
                ],
                flavors: [
                    { label: "Original", color: "#d97706" },
                    { label: "Extra Bold", color: "#92400e" }
                ]
            }
        ]
    }
};

let currentItem = {
    name: '',
    price: 0,
    basePrice: 0
};

let currentSlide = 0;
let slideInterval;
let allMenuImages = [];
let currentImageIndex = 0;

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

const menuContainer = document.querySelector('.menu .container');
const tabBtns = document.querySelectorAll('.tab-btn');

const orderButtons = document.querySelectorAll('.orderBtn');
const orderModal = document.getElementById('orderModal');
const successModal = document.getElementById('successModal');
const closeModal = document.getElementById('closeModal');
const cancelOrderBtn = document.getElementById('cancelOrder');
const closeSuccessBtn = document.getElementById('closeSuccess');

const orderForm = document.getElementById('orderForm');
const modalItemName = document.getElementById('modalItemName');
const modalItemPrice = document.getElementById('modalItemPrice');
const orderQuantity = document.getElementById('orderQuantity');
const increaseQty = document.getElementById('increaseQty');
const decreaseQty = document.getElementById('decreaseQty');

const summaryItemName = document.getElementById('summaryItemName');
const summaryQuantity = document.getElementById('summaryQuantity');
const summaryUnitPrice = document.getElementById('summaryUnitPrice');
const summaryTotalPrice = document.getElementById('summaryTotalPrice');

const successOrderNumber = document.getElementById('successOrderNumber');
const successItemName = document.getElementById('successItemName');
const successQuantity = document.getElementById('successQuantity');
const successTotalPrice = document.getElementById('successTotalPrice');
const successPhone = document.getElementById('successPhone');

const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeIcon = darkModeToggle.querySelector('i');
const darkModeText = darkModeToggle.querySelector('span');

const carouselSlides = document.querySelector('.carousel-slides');
const carouselDots = document.querySelectorAll('.carousel-dot');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const currentSlideEl = document.querySelector('.current-slide');
const totalSlidesEl = document.querySelector('.total-slides');

const imageLightbox = document.getElementById('imageLightbox');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxContent = document.getElementById('lightboxContent');
const prevLightbox = document.getElementById('prevLightbox');
const nextLightbox = document.getElementById('nextLightbox');

function parsePrice(priceText) {
    const match = priceText.match(/M(\d+)/);
    return match ? parseInt(match[1]) : 0;
}

function formatPrice(amount) {
    return `M${amount}`;
}

function generateOrderNumber() {
    const prefix = 'SB';
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `${prefix}-${timestamp}-${random}`;
}

function createMenuItem(item) {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item-simple';
    menuItem.dataset.category = item.category;

    const sizesHTML = item.sizes ? `
        <div class="size-selector">
            ${item.sizes.map((s, i) => `
                <button class="size-btn${i === 0 ? ' active' : ''}" data-price="${s.price}" data-label="${s.label}">
                    ${s.label}<span class="size-price">${s.price}</span>
                </button>`).join('')}
        </div>` : '';

    const basePrice = item.sizes ? item.sizes[0].price : item.price;
    const basePriceNum = parseInt(basePrice.replace(/\D/g, '')) || 0;
    menuItem.dataset.basePrice = basePriceNum; // used by delegated starch handler

    const starchHTML = item.starchOptions ? `
        <div class="starch-selector">
            <div class="starch-btns">
                ${item.starchOptions.map((s, i) => {
                    const starchPrice = basePriceNum + s.addon;
                    const priceTag = `<span class="starch-price">M${starchPrice}</span>`;
                    return `<button class="starch-btn${i === 0 ? ' active' : ''}" data-starch="${s.label}" data-addon="${s.addon}">
                        ${s.label}${priceTag}
                    </button>`;
                }).join('')}
            </div>
        </div>` : '';

    const flavorsHTML = item.flavors ? `
        <div class="flavor-selector">
            <hr>
            <div class="flavor-btns">
                ${item.flavors.map((f, i) => `
                    <button class="flavor-btn${i === 0 ? ' active' : ''}"
                        data-flavor="${f.label}"
                        style="--flavor-color: ${f.color};">
                        <span class="flavor-name">${f.label}</span>
                    </button>`).join('')}
            </div>
        </div>` : '';

    const defaultPrice = basePrice;

    menuItem.innerHTML = `
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
            </div>
            <div class="menu-item-simple-header">
                <h4>${item.name}</h4>
                <div class="price">${defaultPrice}</div>
            </div>
            ${sizesHTML}
            ${flavorsHTML}
            ${starchHTML}
            <div class="menu-item-simple-header">
                <p>${item.description}</p>
                <button class="orderBtn">Order</button>
            </div>
        `;

    // All button interactions handled by delegated listener in attachMenuDelegation
    return menuItem;
}

function createMenuSection(categoryKey, categoryData) {
    const section = document.createElement('div');
    section.className = 'menu-section';
    section.id = `${categoryKey}-section`;

    let subtitleHTML = categoryData.subtitle ?
        `<p class="menu-section-subtitle">${categoryData.subtitle}</p>` : '';

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

// Build every menu section exactly once, then show/hide with CSS.
// This eliminates the synchronous DOM rebuild on every tab click (the INP culprit).
function buildAllMenuSections() {
    let menuContentContainer = document.querySelector('.menu-content-container');
    if (!menuContentContainer) {
        menuContentContainer = document.createElement('div');
        menuContentContainer.className = 'menu-content-container';
        menuContainer.appendChild(menuContentContainer);
    }
    menuContentContainer.innerHTML = '';

    Object.keys(menuData).forEach(categoryKey => {
        const section = createMenuSection(categoryKey, menuData[categoryKey]);
        menuContentContainer.appendChild(section);
    });

    // Wire all interactive listeners once via delegation
    attachMenuDelegation(menuContentContainer);
    initLightbox();
}

// Legacy alias kept so any surviving call still works
function renderAllMenuSections() { buildAllMenuSections(); }

function filterMenuByCategory(category) {
    // Immediately update tab active state so the UI feels instant
    const sections = document.querySelectorAll('.menu-section');
    sections.forEach(sec => {
        if (category === 'all' || sec.id === `${category}-section`) {
            sec.style.display = '';
        } else {
            sec.style.display = 'none';
        }
    });
}

function initializeOrderModal(itemName, priceText, flavorText) {
    currentItem.name = itemName;
    currentItem.basePrice = parsePrice(priceText);
    currentItem.price = priceText;
    currentItem.flavor = flavorText || null;

    modalItemName.textContent = itemName;
    modalItemPrice.textContent = priceText;
    modalItemPrice.classList.remove('has-quantity');

    summaryItemName.textContent = itemName;
    summaryUnitPrice.textContent = priceText;

    orderQuantity.value = 1;
    updateTotalPrice();

    orderForm.reset();
}

function updateTotalPrice() {
    const quantity = parseInt(orderQuantity.value) || 1;
    const total = currentItem.basePrice * quantity;

    summaryQuantity.textContent = quantity;
    summaryTotalPrice.textContent = formatPrice(total);

    if (quantity > 1) {
        modalItemPrice.textContent = `${formatPrice(currentItem.basePrice)} × ${quantity} = ${formatPrice(total)}`;
        modalItemPrice.classList.add('has-quantity');
    } else {
        modalItemPrice.textContent = formatPrice(currentItem.basePrice);
        modalItemPrice.classList.remove('has-quantity');
    }
}

function closeOrderModal() {
    orderModal.classList.remove('active');
    document.body.style.overflow = '';
}

function closeSuccessModal() {
    successModal.classList.remove('active');
    document.body.style.overflow = '';
}

function updateCarousel() {
    carouselSlides.style.transform = `translateX(-${currentSlide * 100}%)`;
    carouselDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
    currentSlideEl.textContent = currentSlide + 1;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % carouselDots.length;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + carouselDots.length) % carouselDots.length;
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

function startAutoPlay() {
    stopAutoPlay();
    slideInterval = setInterval(nextSlide, 5000);
}

function stopAutoPlay() {
    if (slideInterval) clearInterval(slideInterval);
}

function enableDarkMode() {
    document.body.classList.add('dark-mode');
    darkModeToggle.classList.add('active');
    darkModeIcon.className = 'fas fa-sun';
    darkModeText.textContent = 'Light Mode';
    localStorage.setItem('theme', 'dark');
}

function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    darkModeToggle.classList.remove('active');
    darkModeIcon.className = 'fas fa-moon';
    darkModeText.textContent = 'Dark Mode';
    localStorage.setItem('theme', 'light-manual');
}

function collectMenuImages() {
    allMenuImages = [];
    const menuItemImages = document.querySelectorAll('.menu-item-image img');
    menuItemImages.forEach((img, index) => {
        const menuItem = img.closest('.menu-item-simple');
        const itemName = menuItem.querySelector('h4').textContent;
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

    lightboxImage.style.display = 'none';
    lightboxCaption.textContent = 'Loading...';
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;

    lightboxImage.onload = function () {
        lightboxImage.style.display = 'block';
        lightboxCaption.textContent = image.caption;
        imageLightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        lightboxContent.classList.remove('zoomed');
        lightboxImage.style.transform = 'scale(1)';
    };

    lightboxImage.onerror = function () {
        lightboxCaption.textContent = 'Failed to load image';
        lightboxImage.style.display = 'block';
        imageLightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    };
}

function closeLightbox() {
    imageLightbox.classList.remove('active');
    document.body.style.overflow = '';
    lightboxContent.classList.remove('zoomed');
    lightboxImage.style.transform = 'scale(1)';
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % allMenuImages.length;
    openLightbox(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + allMenuImages.length) % allMenuImages.length;
    openLightbox(currentImageIndex);
}

function toggleZoom() {
    if (lightboxContent.classList.contains('zoomed')) {
        lightboxContent.classList.remove('zoomed');
        lightboxImage.style.transform = 'scale(1)';
    } else {
        lightboxContent.classList.add('zoomed');
        lightboxImage.style.transform = 'scale(1.5)';
    }
}

function initLightbox() {
    collectMenuImages();
    // Lightbox clicks handled by delegation in attachMenuDelegation — nothing to attach here
}

// Single delegated listener on the container — O(1) listeners regardless of item count
function attachMenuDelegation(container) {
    container.addEventListener('click', function (e) {
        // ── Order button ──
        const orderBtn = e.target.closest('.orderBtn');
        if (orderBtn) {
            const menuItem = orderBtn.closest('.menu-item-simple');
            const itemName  = menuItem.querySelector('h4').textContent;
            const itemPrice = menuItem.querySelector('.price').textContent;

            const activeSize   = menuItem.querySelector('.size-btn.active');
            const activeStarch = menuItem.querySelector('.starch-btn.active');
            const activeFlavor = menuItem.querySelector('.flavor-btn.active');

            let displayName = itemName;
            if (activeFlavor) displayName += ` (${activeFlavor.dataset.flavor})`;
            if (activeSize)   displayName += ` - ${activeSize.dataset.label}`;
            if (activeStarch) displayName += ` + ${activeStarch.dataset.starch}`;

            initializeOrderModal(displayName, itemPrice, activeFlavor ? activeFlavor.dataset.flavor : null);
            orderModal.classList.add('active');
            document.body.style.overflow = 'hidden';

            orderBtn.classList.add('clicked');
            setTimeout(() => orderBtn.classList.remove('clicked'), 500);
            return;
        }

        // ── Size button ──
        const sizeBtn = e.target.closest('.size-btn');
        if (sizeBtn) {
            const selector = sizeBtn.closest('.size-selector');
            selector.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
            sizeBtn.classList.add('active');
            const menuItem = sizeBtn.closest('.menu-item-simple');
            menuItem.querySelector('.price').textContent = sizeBtn.dataset.price;
            return;
        }

        // ── Flavor button ──
        const flavorBtn = e.target.closest('.flavor-btn');
        if (flavorBtn) {
            const selector = flavorBtn.closest('.flavor-selector');
            selector.querySelectorAll('.flavor-btn').forEach(b => b.classList.remove('active'));
            flavorBtn.classList.add('active');
            return;
        }

        // ── Starch button ──
        const starchBtn = e.target.closest('.starch-btn');
        if (starchBtn) {
            const selector = starchBtn.closest('.starch-selector');
            selector.querySelectorAll('.starch-btn').forEach(b => b.classList.remove('active'));
            starchBtn.classList.add('active');
            const menuItem = starchBtn.closest('.menu-item-simple');
            const basePriceNum = parseInt(menuItem.querySelector('.price').textContent.replace(/\D/g, '')) || 0;
            // Recalculate from the item's base (stored on first starch btn dataset isn't reliable after size change)
            // Instead read from all starch btns to find base = price when addon=0 isn't available,
            // so store base on the menu item element itself
            const base = parseInt(menuItem.dataset.basePrice) || basePriceNum;
            const addon = parseInt(starchBtn.dataset.addon) || 0;
            menuItem.querySelector('.price').textContent = `M${base + addon}`;
            return;
        }

        // ── Image / lightbox ──
        const imgContainer = e.target.closest('.menu-item-image');
        if (imgContainer) {
            e.stopPropagation();
            const allContainers = Array.from(document.querySelectorAll('.menu-item-image'));
            openLightbox(allContainers.indexOf(imgContainer));
            return;
        }
    });
}

// Kept so legacy calls in filterMenuByCategory path don't break
function initializeMenuEventListeners() { /* delegation handles everything */ }

function initializeTabListeners() {
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Step 1 — update button state synchronously so paint happens instantly
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            // Step 2 — defer the section show/hide until after the browser paints
            requestAnimationFrame(() => {
                filterMenuByCategory(btn.getAttribute('data-tab'));
            });
        });
    });
}

function initializeCarouselListeners() {
    prevBtn.addEventListener('click', () => { prevSlide(); startAutoPlay(); });
    nextBtn.addEventListener('click', () => { nextSlide(); startAutoPlay(); });
    carouselDots.forEach((dot, index) => {
        dot.addEventListener('click', () => { goToSlide(index); startAutoPlay(); });
    });
    const carousel = document.querySelector('.hero-carousel');
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);
}

// ─── EmailJS order notification ──────────────────────────────────────────────
// Setup (free, no backend needed — works from any static site):
//  1. Sign up at https://www.emailjs.com
//  2. Add Gmail as an Email Service → copy the Service ID
//  3. Create an Email Template using the variables listed below → copy Template ID
//  4. Account → General → copy your Public Key
//  Then paste the three values below.
//
// Template variables to use in your EmailJS template:
//   {{order_number}}  {{timestamp}}  {{customer_name}}  {{customer_phone}}
//   {{item}}  {{quantity}}  {{total}}  {{special_instructions}}  {{to_email}}
// ─────────────────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';   // e.g. 'abcDEFghiJKL'

async function sendOrderEmail(order) {
    try {
        const result = await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            {
                to_email:             'topgrilllesotho@gmail.com',
                order_number:         order.orderNumber,
                timestamp:            order.timestamp,
                customer_name:        order.customerName,
                customer_phone:       order.customerPhone,
                item:                 order.item,
                quantity:             order.quantity,
                total:                order.total,
                special_instructions: order.specialInstructions || 'None'
            },
            EMAILJS_PUBLIC_KEY
        );
        console.log('Order email sent:', result.text);
    } catch (err) {
        console.warn('Email send failed (order still recorded):', err);
    }
}

function initializeFormListeners() {
    increaseQty.addEventListener('click', function () {
        const current = parseInt(orderQuantity.value) || 1;
        if (current < 10) { orderQuantity.value = current + 1; updateTotalPrice(); }
    });

    decreaseQty.addEventListener('click', function () {
        const current = parseInt(orderQuantity.value) || 1;
        if (current > 1) { orderQuantity.value = current - 1; updateTotalPrice(); }
    });

    orderQuantity.addEventListener('input', function () {
        let value = parseInt(this.value) || 1;
        if (value < 1) value = 1;
        if (value > 10) value = 10;
        this.value = value;
        updateTotalPrice();
    });

    orderForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const submitBtn = document.getElementById('submitOrder');
        const customerName = document.getElementById('customerName').value.trim();
        const customerPhone = document.getElementById('customerPhone').value.trim();
        const quantity = parseInt(orderQuantity.value) || 1;
        const specialInstructions = document.getElementById('specialInstructions').value.trim();

        if (!customerName || !customerPhone) {
            alert('Please fill in your name and phone number.');
            return;
        }
        if (customerPhone.replace(/\D/g, '').length < 8) {
            alert('Please enter a valid phone number.');
            return;
        }

        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending order...';

        const orderNumber = generateOrderNumber();
        const total = currentItem.basePrice * quantity;
        const timestamp = new Date().toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' });

        const orderDetails = {
            orderNumber,
            item: currentItem.name,
            quantity,
            total: formatPrice(total),
            customerName,
            customerPhone,
            specialInstructions,
            timestamp
        };

        console.log('New Order:', orderDetails);

        sendOrderEmail(orderDetails).finally(() => {
            successOrderNumber.textContent = orderNumber;
            successItemName.textContent = `${currentItem.name} × ${quantity}`;
            successQuantity.textContent = quantity;
            successTotalPrice.textContent = formatPrice(total);
            successPhone.textContent = customerPhone;

            orderModal.classList.remove('active');
            successModal.classList.add('active');

            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-shopping-cart"></i> Place Order';
        });
    });

    closeModal.addEventListener('click', closeOrderModal);
    cancelOrderBtn.addEventListener('click', closeOrderModal);
    closeSuccessBtn.addEventListener('click', closeSuccessModal);

    orderModal.addEventListener('click', function (e) {
        if (e.target === this) closeOrderModal();
    });
    successModal.addEventListener('click', function (e) {
        if (e.target === this) closeSuccessModal();
    });

    const phoneInput = document.getElementById('customerPhone');
    phoneInput.addEventListener('input', function () {
        let value = this.value.replace(/\D/g, '');
        if (value.length > 0) value = value.match(/.{1,3}/g).join(' ');
        this.value = value;
    });
}

function initializeLightboxListeners() {
    lightboxClose.addEventListener('click', closeLightbox);
    prevLightbox.addEventListener('click', (e) => { e.stopPropagation(); prevImage(); });
    nextLightbox.addEventListener('click', (e) => { e.stopPropagation(); nextImage(); });
    imageLightbox.addEventListener('click', (e) => { if (e.target === imageLightbox) closeLightbox(); });
    lightboxImage.addEventListener('dblclick', toggleZoom);

    let tapCount = 0;
    let tapTimer;
    lightboxImage.addEventListener('touchstart', (e) => {
        tapCount++;
        if (tapCount === 1) {
            tapTimer = setTimeout(() => { tapCount = 0; }, 300);
        } else if (tapCount === 2) {
            clearTimeout(tapTimer);
            tapCount = 0;
            toggleZoom();
            e.preventDefault();
        }
    });
}

function initializeNavigationListeners() {
    mobileMenuBtn.addEventListener('click', () => { navMenu.classList.toggle('active'); });

    document.addEventListener('click', (event) => {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnMenuButton = mobileMenuBtn.contains(event.target);
        if (navMenu.classList.contains('active') && !isClickInsideMenu && !isClickOnMenuButton) {
            navMenu.classList.remove('active');
        }
    });

    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const targetElement = document.querySelector(targetId);
                window.scrollTo({ top: targetElement.offsetTop - 80, behavior: 'smooth' });
            }
            navMenu.classList.remove('active');
        });
    });

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (navMenu.classList.contains('active')) navMenu.classList.remove('active');
        const header = document.querySelector('header');
        if (scrollTop > 100) {
            header.style.padding = '15px 0';
            header.style.backgroundColor = 'rgba(26, 26, 26, 0.98)';
        } else {
            header.style.padding = '20px 0';
            header.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
        }
    });
}

function initializeDarkMode() {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
        enableDarkMode();
    }

    darkModeToggle.addEventListener('click', () => {
        if (document.body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    prefersDarkScheme.addListener((e) => {
        const current = localStorage.getItem('theme');
        if (current === 'light-manual') return;
        if (e.matches) { enableDarkMode(); } else { disableDarkMode(); }
    });
}

function initializeKeyboardListeners() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            if (imageLightbox.classList.contains('active')) { prevImage(); }
            else { prevSlide(); startAutoPlay(); }
        } else if (e.key === 'ArrowRight') {
            if (imageLightbox.classList.contains('active')) { nextImage(); }
            else { nextSlide(); startAutoPlay(); }
        } else if (e.key === 'Escape') {
            if (orderModal.classList.contains('active')) closeOrderModal();
            else if (successModal.classList.contains('active')) closeSuccessModal();
            else if (imageLightbox.classList.contains('active')) closeLightbox();
        } else if (e.key === ' ' && imageLightbox.classList.contains('active')) {
            toggleZoom();
            e.preventDefault();
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const existingMenuContent = document.querySelectorAll('.menu-section, .all-menu-content, .tab-content-section');
    existingMenuContent.forEach(el => el.remove());

    initializeNavigationListeners();
    initializeDarkMode();
    initializeTabListeners();
    initializeCarouselListeners();
    initializeFormListeners();
    initializeLightboxListeners();
    initializeKeyboardListeners();

    const totalSlides = document.querySelectorAll('.carousel-slide').length;
    totalSlidesEl.textContent = totalSlides;
    updateCarousel();
    startAutoPlay();

    const allBtn = document.querySelector('.tab-btn[data-tab="all"]');
    if (allBtn) allBtn.classList.add('active');
    renderAllMenuSections();

    function checkAutoPlay() {
        const autoPlayIndicator = document.querySelector('.carousel-auto-play');
        if (window.innerWidth <= 480) {
            stopAutoPlay();
            if (autoPlayIndicator) autoPlayIndicator.style.display = 'none';
        } else {
            startAutoPlay();
            if (autoPlayIndicator) autoPlayIndicator.style.display = 'flex';
        }
    }

    window.addEventListener('load', checkAutoPlay);
    window.addEventListener('resize', checkAutoPlay);
    checkAutoPlay();
});