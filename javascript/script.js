const menuData = {
    burgers: {
        title: "Burgers",
        icon: "fas fa-hamburger",
        subtitle: "Served with a side of fries",
        items: [
            {
                name: "Student Burger",
                price: "M45",
                image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                description: "Freshly cut tomatoes and onions, lettuce and beef patty",
                category: "burgers"
            },
            {
                name: "Classic Burger",
                price: "M50",
                image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                description: "Freshly cut tomatoes and onions, lettuce, beef patty and cheese",
                category: "burgers"
            },
            {
                name: "Chicken Burger",
                price: "M50",
                image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                description: "Freshly cut tomatoes and onions, lettuce and chicken fillets",
                category: "burgers"
            },
            {
                name: "Something Meaty",
                price: "M50",
                image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                description: "Freshly cut onions, beef patty, bacon and cheese",
                category: "burgers"
            }
        ]
    },
    kotas: {
        title: "Kotas",
        icon: "fas fa-bread-slice",
        subtitle: "",
        items: [
            {
                name: "Value Kota",
                price: "M20",
                image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                description: "Quarter loaf, chips, russian",
                category: "kotas"
            },
            {
                name: "Classic Kota",
                price: "M25",
                image: "assets/classicKota.jpg",
                description: "Quarter loaf, chips, russian and fried egg",
                category: "kotas"
            },
            {
                name: "Breakfast Kota",
                price: "M30",
                image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                description: "Quarter loaf, chips, russian, lettuce, cucumber, cheese",
                category: "kotas"
            },
            {
                name: "King Kota",
                price: "M35",
                image: "assets/classicKota.jpg",
                description: "Quarter loaf, chips, russian, fried egg and chicken fillet",
                category: "kotas"
            }
        ]
    },
    chinese: {
        title: "Chinese Food",
        icon: "fas fa-utensils",
        subtitle: "",
        items: [
            {
                name: "Small Chinese",
                price: "M20",
                image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                description: "Perfect for a quick snack or light meal",
                category: "chinese"
            },
            {
                name: "Medium Chinese",
                price: "M25",
                image: "assets/mediumChinese.jpeg",
                description: "Ideal portion for one person",
                category: "chinese"
            },
            {
                name: "Large Chinese",
                price: "M30",
                image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                description: "Great for sharing or a hearty meal",
                category: "chinese"
            }
        ]
    },
    chesanyama: {
        title: "Chesa-nyama",
        icon: "fas fa-drumstick-bite",
        subtitle: "Served with papa and moroho/chakalaka",
        items: [
            {
                name: "Wors",
                price: "M30",
                image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                description: "Traditional South African sausage with sides",
                category: "chesanyama"
            },
            {
                name: "Chicken Chesa",
                price: "M35",
                image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                description: "Juicy chicken portions with traditional sides",
                category: "chesanyama"
            },
            {
                name: "Pork",
                price: "M40",
                image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                description: "Tender pork cuts served with papa and moroho/chakalaka",
                category: "chesanyama"
            },
            {
                name: "Beef",
                price: "M45",
                image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                description: "Flavorful beef cuts with traditional accompaniments",
                category: "chesanyama"
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
                category: "classics"
            },
            {
                name: "Lekoenya",
                price: "M2",
                image: "assets/lekoenya.jpg",
                description: "",
                category: "classics"
            },
            {
                name: "Russian",
                price: "M8",
                image: "assets/russian.jpeg",
                description: "",
                category: "classics"
            },
            {
                name: "Waffle",
                price: "M2",
                image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                description: "",
                category: "classics"
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

    menuItem.innerHTML = `
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
            </div>
            <div class="menu-item-simple-header">
                <h4>${item.name}</h4>
                <div class="price">${item.price}</div>
            </div>
            <div class="menu-item-simple-header">
                <p>${item.description}</p>
                <button class="orderBtn">Order</button>
            </div>
        `;

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
    localStorage.setItem('theme', 'light');
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
            const itemName = menuItem.querySelector('h4').textContent;
            const itemPrice = menuItem.querySelector('.price').textContent;

            initializeOrderModal(itemName, itemPrice);

            orderModal.classList.add('active');
            document.body.style.overflow = 'hidden';

            // Add click feedback
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 500);
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

    // Listen for system theme changes
    prefersDarkScheme.addListener((e) => {
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                enableDarkMode();
            } else {
                disableDarkMode();
            }
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