const menuData = {
    BreakFast: {
        title: "Break Fast",
        icon: "fas fa-hamburger",
        subtitle: "Served with a side of fries",
        items: [
            {
                name: "Break Fast Sandwich",
                price: "M35",
                image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                description: "Chicken Mayo, baked beans, Vianna, Boiled Eggs",
                category: "Break Fast"
            },
            {
                name: "Break Fast Sandwich",
                price: "M35",
                image: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                description: "Chicken Mayo, Green Salad, vianna, Scrambled eggs",
                category: "Break Fast"
            },
            {
                name: "Break Fast Sandwic",
                price: "M20",
                image: "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                description: "Chicken Mayo, Vegetables",
                category: "Break Fast"
            },
            {
                name: "Break Fast Burger",
                price: "M25",
                image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                description: "Ham, Cheeze, Scrambled eggs, lettus",
                category: "Break Fast"
            },
            {
                name: "Break Fast Mini Pizza",
                price: "M20",
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
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
                image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                description: "Traditional South African sausage with sides",
                category: "Lunch",
                starchOptions: [{label:"Papa",addon:5},{label:"Samp",addon:10},{label:"Rice",addon:10},{label:"Leqebekoane",addon:5}]
            },
            {
                name: "Chicken",
                price: "M35",
                image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                description: "Juicy chicken portions with traditional sides",
                category: "Lunch",
                starchOptions: [{label:"Papa",addon:5},{label:"Samp",addon:10},{label:"Rice",addon:10},{label:"Leqebekoane",addon:5}]
            },
            {
                name: "Pork",
                price: "M40",
                image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                description: "Tender pork cuts served with papa and moroho/chakalaka",
                category: "Lunch",
                starchOptions: [{label:"Papa",addon:5},{label:"Samp",addon:10},{label:"Rice",addon:10},{label:"Leqebekoane",addon:5}]
            },
            {
                name: "Beef",
                price: "M45",
                image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                description: "Flavorful beef cuts with traditional accompaniments",
                category: "Lunch",
                starchOptions: [{label:"Papa",addon:5},{label:"Samp",addon:10},{label:"Rice",addon:10},{label:"Leqebekoane",addon:5}]
            },
            {
                name: "Oxtail",
                price: "M45",
                image: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                description: "Slow-cooked tender oxtail with rich sauce",
                category: "Lunch",
                starchOptions: [{label:"Papa",addon:5},{label:"Samp",addon:10},{label:"Rice",addon:10},{label:"Leqebekoane",addon:5}]
            },
            {
                name: "Likahare",
                price: "M45",
                image: "https://images.unsplash.com/photo-1562802378-063ec186a863?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                description: "Traditional tripe served with accompaniments",
                category: "Lunch",
                starchOptions: [{label:"Papa",addon:5},{label:"Samp",addon:10},{label:"Rice",addon:10},{label:"Leqebekoane",addon:5}]
            },
            {
                name: "Chicken Livers",
                price: "M45",
                image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                description: "Spicy peri-peri chicken livers with sides",
                category: "Lunch",
                starchOptions: [{label:"Papa",addon:5},{label:"Samp",addon:10},{label:"Rice",addon:10},{label:"Leqebekoane",addon:5}]
            },
            {
                name: "Chicken Hearts",
                price: "M45",
                image: "https://images.unsplash.com/photo-1606728035253-49e8a23146de?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                description: "Grilled chicken hearts seasoned to perfection",
                category: "Lunch",
                starchOptions: [{label:"Papa",addon:5},{label:"Leqebekoane",addon:5}]
            },
            {
                name: "Linaoa",
                price: "M45",
                image: "https://images.unsplash.com/photo-1608500218890-c4f9c4a8ad39?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
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
                image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
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
                image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
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
                image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                description: "",
                category: "classics"
            },
            {
                name: "Bread Roll",
                price: "M10",
                image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                description: "",
                category: "classics"
            },
            {
                name: "Russian",
                price: "M8",
                image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                description: "",
                category: "classics"
            },
            {
                name: "Fish",
                price: "From M15",
                image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
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
                image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                description: "The classic refreshing cola",
                category: "Drinks",
                sizes: [
                    { label: "500ml",  price: "M12" },
                    { label: "1 Litre", price: "M18" },
                    { label: "2 Litre",  price: "M28" }
                ],
                flavors: [
                    { label: "Original", color: "#c8102e", emoji: "🥤" },
                    { label: "Zero Sugar", color: "#1a1a1a", emoji: "⚫" }
                ]
            },
            {
                name: "Fanta",
                price: "From M12",
                image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                description: "Fruity and refreshing",
                category: "Drinks",
                sizes: [
                    { label: "500ml",  price: "M12" },
                    { label: "1 Litre", price: "M18" },
                    { label: "2 Litre",  price: "M28" }
                ],
                flavors: [
                    { label: "Orange", color: "#f97316", emoji: "🍊" },
                    { label: "Grape", color: "#7c3aed", emoji: "🍇" },
                    { label: "Pineapple", color: "#eab308", emoji: "🍍" },
                    { label: "Strawberry", color: "#e11d48", emoji: "🍓" }
                ]
            },
            {
                name: "Sprite",
                price: "From M12",
                image: "https://images.unsplash.com/photo-1527960471264-932f39eb5846?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                description: "Crisp lemon-lime refreshment",
                category: "Drinks",
                sizes: [
                    { label: "500ml",  price: "M12" },
                    { label: "1 Litre", price: "M18" },
                    { label: "2 Litre",  price: "M28" }
                ],
                flavors: [
                    { label: "Lemon-Lime", color: "#84cc16", emoji: "🍋" },
                    { label: "Cranberry", color: "#be123c", emoji: "🍒" }
                ]
            },
            {
                name: "Stoney Ginger Beer",
                price: "From M12",
                image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                description: "Bold and spicy ginger kick",
                category: "Drinks",
                sizes: [
                    { label: "500ml",  price: "M12" },
                    { label: "1 Litre", price: "M18" },
                    { label: "2 Litre",  price: "M28" }
                ],
                flavors: [
                    { label: "Original", color: "#d97706", emoji: "🫚" },
                    { label: "Extra Bold", color: "#92400e", emoji: "🔥" }
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

    const starchHTML = item.starchOptions ? `
        <div class="starch-selector">
            <div class="starch-btns">
                ${item.starchOptions.map((s, i) => {
                    const starchPrice = basePriceNum + s.addon;
                    const priceTag = s.addon > 0 ? `<span class="starch-price">M${starchPrice}</span>` : `<span class="starch-price">M${starchPrice}</span>`;
                    return `<button class="starch-btn${i === 0 ? ' active' : ''}" data-starch="${s.label}" data-addon="${s.addon}">
                        ${s.label}${priceTag}
                    </button>`;
                }).join('')}
            </div>
        </div>` : '';

    const flavorsHTML = item.flavors ? `
        <div class="flavor-selector">
            <hr />
            <div class="flavor-btns">
                ${item.flavors.map((f, i) => `
                    <button class="flavor-btn${i === 0 ? ' active' : ''}"
                        data-flavor="${f.label}"
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

    // Wire up size buttons
    if (item.sizes) {
        const priceEl = menuItem.querySelector('.price');
        menuItem.querySelectorAll('.size-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                menuItem.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                priceEl.textContent = btn.dataset.price;
            });
        });
    }

    // Wire up flavor buttons
    if (item.flavors) {
        menuItem.querySelectorAll('.flavor-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                menuItem.querySelectorAll('.flavor-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    }

    // Wire up starch buttons — update card price on selection
    if (item.starchOptions) {
        const priceEl = menuItem.querySelector('.price');
        menuItem.querySelectorAll('.starch-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                menuItem.querySelectorAll('.starch-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const addon = parseInt(btn.dataset.addon) || 0;
                priceEl.textContent = `M${basePriceNum + addon}`;
            });
        });
    }

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

    // Add items to the category
    categoryData.items.forEach(item => {
        menuCategory.appendChild(createMenuItem(item));
    });

    return section;
}

function renderAllMenuSections() {
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

    // Re-initialize event listeners
    initializeMenuEventListeners();
    initLightbox();
}

function filterMenuByCategory(category) {
    let menuContentContainer = document.querySelector('.menu-content-container');
    if (!menuContentContainer) {
        menuContentContainer = document.createElement('div');
        menuContentContainer.className = 'menu-content-container';
        menuContainer.appendChild(menuContentContainer);
    }

    menuContentContainer.innerHTML = '';

    if (category === 'all') {
        renderAllMenuSections();
    } else if (menuData[category]) {
        const section = createMenuSection(category, menuData[category]);
        menuContentContainer.appendChild(section);
        initializeMenuEventListeners();
        initLightbox();
    }
}

function initializeOrderModal(itemName, priceText) {
    currentItem.name = itemName;
    currentItem.basePrice = parsePrice(priceText);
    currentItem.price = priceText;

    // Update modal
    modalItemName.textContent = itemName;
    modalItemPrice.textContent = priceText;
    modalItemPrice.classList.remove('has-quantity');

    // Update summary
    summaryItemName.textContent = itemName;
    summaryUnitPrice.textContent = priceText;

    // Reset quantity
    orderQuantity.value = 1;
    updateTotalPrice();

    // Reset form
    orderForm.reset();
}

function updateTotalPrice() {
    const quantity = parseInt(orderQuantity.value) || 1;
    const total = currentItem.basePrice * quantity;

    summaryQuantity.textContent = quantity;
    summaryTotalPrice.textContent = formatPrice(total);

    // Update header price to reflect running total
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
    if (slideInterval) {
        clearInterval(slideInterval);
    }
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
    localStorage.setItem('theme', 'light-manual'); // 'light-manual' = user explicitly chose light
}

function collectMenuImages() {
    allMenuImages = [];
    const menuItemImages = document.querySelectorAll('.menu-item-image img');

    menuItemImages.forEach((img, index) => {
        const menuItem = img.closest('.menu-item-simple');
        const itemName = menuItem.querySelector('h4').textContent;
        const imgSrc = img.getAttribute('src');
        const altText = img.getAttribute('alt') || itemName;

        allMenuImages.push({
            src: imgSrc,
            alt: altText,
            caption: itemName,
            index: index
        });
    });
}

function openLightbox(imageIndex) {
    if (!allMenuImages[imageIndex]) return;

    currentImageIndex = imageIndex;
    const image = allMenuImages[imageIndex];

    // Show loading state
    lightboxImage.style.display = 'none';
    lightboxCaption.textContent = 'Loading...';

    // Set image
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;

    // When image loads
    lightboxImage.onload = function () {
        lightboxImage.style.display = 'block';
        lightboxCaption.textContent = image.caption;

        // Show lightbox
        imageLightbox.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Reset zoom
        lightboxContent.classList.remove('zoomed');
        lightboxImage.style.transform = 'scale(1)';
    };

    // Handle image load error
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

    // Reset zoom
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
        // Zoom out
        lightboxContent.classList.remove('zoomed');
        lightboxImage.style.transform = 'scale(1)';
    } else {
        // Zoom in
        lightboxContent.classList.add('zoomed');
        lightboxImage.style.transform = 'scale(1.5)';
    }
}

function initLightbox() {
    collectMenuImages();

    document.querySelectorAll('.menu-item-image').forEach((container, index) => {
        container.style.cursor = 'pointer';
        container.addEventListener('click', (e) => {
            e.stopPropagation();
            openLightbox(index);
        });
    });

    document.querySelectorAll('.menu-item-image img').forEach((img, index) => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', (e) => {
            e.stopPropagation();
            openLightbox(index);
        });
    });
}

function initializeMenuEventListeners() {
    document.querySelectorAll('.orderBtn').forEach(button => {
        button.addEventListener('click', function () {
            const menuItem = this.closest('.menu-item-simple');
            const itemName  = menuItem.querySelector('h4').textContent;
            const itemPrice = menuItem.querySelector('.price').textContent;

            const activeSize   = menuItem.querySelector('.size-btn.active');
            const activeStarch = menuItem.querySelector('.starch-btn.active');

            let displayName = itemName;
            if (activeSize)   displayName += ` (${activeSize.dataset.label})`;
            if (activeStarch) displayName += ` + ${activeStarch.dataset.starch}`;

            initializeOrderModal(displayName, itemPrice);

            orderModal.classList.add('active');
            document.body.style.overflow = 'hidden';

            this.classList.add('clicked');
            setTimeout(() => this.classList.remove('clicked'), 500);
        });
    });
}

function initializeTabListeners() {
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const tabToShow = btn.getAttribute('data-tab');
            filterMenuByCategory(tabToShow);
        });
    });
}

function initializeCarouselListeners() {
    prevBtn.addEventListener('click', () => {
        prevSlide();
        startAutoPlay();
    });

    nextBtn.addEventListener('click', () => {
        nextSlide();
        startAutoPlay();
    });

    carouselDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
            startAutoPlay();
        });
    });

    // Pause auto-play on hover
    const carousel = document.querySelector('.hero-carousel');
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);
}

function initializeFormListeners() {
    increaseQty.addEventListener('click', function () {
        const current = parseInt(orderQuantity.value) || 1;
        if (current < 10) {
            orderQuantity.value = current + 1;
            updateTotalPrice();
        }
    });

    decreaseQty.addEventListener('click', function () {
        const current = parseInt(orderQuantity.value) || 1;
        if (current > 1) {
            orderQuantity.value = current - 1;
            updateTotalPrice();
        }
    });

    orderQuantity.addEventListener('input', function () {
        let value = parseInt(this.value) || 1;
        if (value < 1) value = 1;
        if (value > 10) value = 10;
        this.value = value;
        updateTotalPrice();
    });

    // Order form submission
    orderForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const submitBtn = document.getElementById('submitOrder');
        const customerName = document.getElementById('customerName').value.trim();
        const customerPhone = document.getElementById('customerPhone').value.trim();
        const quantity = parseInt(orderQuantity.value) || 1;
        const specialInstructions = document.getElementById('specialInstructions').value.trim();

        // Simple validation
        if (!customerName || !customerPhone) {
            alert('Please fill in your name and phone number.');
            return;
        }

        if (customerPhone.replace(/\D/g, '').length < 8) {
            alert('Please enter a valid phone number.');
            return;
        }

        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';

        // Simulate API call delay
        setTimeout(() => {
            // Generate order details
            const orderNumber = generateOrderNumber();
            const total = currentItem.basePrice * quantity;

            // Update success modal
            successOrderNumber.textContent = orderNumber;
            successItemName.textContent = `${currentItem.name} × ${quantity}`;
            successQuantity.textContent = quantity;
            successTotalPrice.textContent = formatPrice(total);
            successPhone.textContent = customerPhone;

            // Close order modal and show success
            orderModal.classList.remove('active');
            successModal.classList.add('active');

            // Reset form and button
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-shopping-cart"></i> Place Order';

            // Log order to console
            console.log('New Order:', {
                orderNumber,
                item: currentItem.name,
                quantity,
                total: formatPrice(total),
                customerName,
                customerPhone,
                specialInstructions,
                timestamp: new Date().toISOString()
            });
        }, 1500);
    });

    // Modal close buttons
    closeModal.addEventListener('click', closeOrderModal);
    cancelOrderBtn.addEventListener('click', closeOrderModal);
    closeSuccessBtn.addEventListener('click', closeSuccessModal);

    // Close modals when clicking outside
    orderModal.addEventListener('click', function (e) {
        if (e.target === this) {
            closeOrderModal();
        }
    });

    successModal.addEventListener('click', function (e) {
        if (e.target === this) {
            closeSuccessModal();
        }
    });

    // Phone input formatting
    const phoneInput = document.getElementById('customerPhone');
    phoneInput.addEventListener('input', function () {
        let value = this.value.replace(/\D/g, '');
        if (value.length > 0) {
            value = value.match(/.{1,3}/g).join(' ');
        }
        this.value = value;
    });
}

function initializeLightboxListeners() {
    lightboxClose.addEventListener('click', closeLightbox);

    prevLightbox.addEventListener('click', (e) => {
        e.stopPropagation();
        prevImage();
    });

    nextLightbox.addEventListener('click', (e) => {
        e.stopPropagation();
        nextImage();
    });

    // Close lightbox when clicking outside
    imageLightbox.addEventListener('click', (e) => {
        if (e.target === imageLightbox) {
            closeLightbox();
        }
    });

    // Double click to zoom
    lightboxImage.addEventListener('dblclick', toggleZoom);

    // For mobile: double tap to zoom
    let tapCount = 0;
    let tapTimer;
    lightboxImage.addEventListener('touchstart', (e) => {
        tapCount++;

        if (tapCount === 1) {
            tapTimer = setTimeout(() => {
                tapCount = 0;
            }, 300);
        } else if (tapCount === 2) {
            clearTimeout(tapTimer);
            tapCount = 0;
            toggleZoom();
            e.preventDefault();
        }
    });
}

function initializeNavigationListeners() {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnMenuButton = mobileMenuBtn.contains(event.target);

        if (navMenu.classList.contains('active') && !isClickInsideMenu && !isClickOnMenuButton) {
            navMenu.classList.remove('active');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#home') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                const targetElement = document.querySelector(targetId);
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }

            navMenu.classList.remove('active');
        });
    });

    // Close menu on scroll
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }

        // Header scroll effect
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

    // Enable dark mode if:
    // - user previously chose dark, OR
    // - user has never set a preference AND system prefers dark, OR
    // - system prefers dark AND user hasn't explicitly chosen light this session
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
        enableDarkMode();
    }
    // 'light-manual' means user deliberately switched to light — respect that, don't override

    darkModeToggle.addEventListener('click', () => {
        if (document.body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    // Follow system changes in real time — but only if user hasn't manually chosen light
    prefersDarkScheme.addListener((e) => {
        const current = localStorage.getItem('theme');
        if (current === 'light-manual') return; // user chose light — don't override
        if (e.matches) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });
}

function initializeKeyboardListeners() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            if (imageLightbox.classList.contains('active')) {
                prevImage();
            } else {
                prevSlide();
                startAutoPlay();
            }
        } else if (e.key === 'ArrowRight') {
            if (imageLightbox.classList.contains('active')) {
                nextImage();
            } else {
                nextSlide();
                startAutoPlay();
            }
        } else if (e.key === 'Escape') {
            if (orderModal.classList.contains('active')) {
                closeOrderModal();
            } else if (successModal.classList.contains('active')) {
                closeSuccessModal();
            } else if (imageLightbox.classList.contains('active')) {
                closeLightbox();
            }
        } else if (e.key === ' ' && imageLightbox.classList.contains('active')) {
            // Space to toggle zoom
            toggleZoom();
            e.preventDefault();
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    // Remove existing menu content
    const existingMenuContent = document.querySelectorAll('.menu-section, .all-menu-content, .tab-content-section');
    existingMenuContent.forEach(el => el.remove());

    initializeNavigationListeners();
    initializeDarkMode();
    initializeTabListeners();
    initializeCarouselListeners();
    initializeFormListeners();
    initializeLightboxListeners();
    initializeKeyboardListeners();

    // Initialize carousel
    const totalSlides = document.querySelectorAll('.carousel-slide').length;
    totalSlidesEl.textContent = totalSlides;
    updateCarousel();
    startAutoPlay();

    // Set initial active tab and render menu
    const allBtn = document.querySelector('.tab-btn[data-tab="all"]');
    if (allBtn) {
        allBtn.classList.add('active');
    }
    renderAllMenuSections();

    // Check auto-play on mobile
    function checkAutoPlay() {
        if (window.innerWidth <= 480) {
            stopAutoPlay();
            const autoPlayIndicator = document.querySelector('.carousel-auto-play');
            if (autoPlayIndicator) {
                autoPlayIndicator.style.display = 'none';
            }
        } else {
            startAutoPlay();
            const autoPlayIndicator = document.querySelector('.carousel-auto-play');
            if (autoPlayIndicator) {
                autoPlayIndicator.style.display = 'flex';
            }
        }
    }

    // Check on load and resize
    window.addEventListener('load', checkAutoPlay);
    window.addEventListener('resize', checkAutoPlay);
    checkAutoPlay();
});