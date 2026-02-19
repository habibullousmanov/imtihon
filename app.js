document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    renderFilterButtons();
    renderProducts(PRODUCTS.slice(0, 8)); 
    loadCart();
    addEventListeners();
    setupDiscoverToggle();
    setupLoadMore();
});

// ================== THEME ==================
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');

    const sidebar = document.querySelector('.main-left');
    if (sidebar) {
        sidebar.classList.toggle('dark-mode');
    }

    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// ================== DISCOVER TOGGLE ==================
function setupDiscoverToggle() {
    const discoverLi = document.querySelector('.ul-li > li');
    const discoverUl = document.querySelector('.ul-li .ul-li2');

    if (discoverLi && discoverUl) {
        discoverUl.style.display = 'none';

        discoverLi.addEventListener('click', function() {
            discoverUl.style.display =
                discoverUl.style.display === 'none' ? 'block' : 'none';
        });
    }
}

// ================== FILTER BUTTONS ==================
function renderFilterButtons() {
    const container = document.getElementById('filterButtons');
    if (!container) return;

    let html = '';
    CATEGORIES.forEach((cat, index) => {
        const isActive = index === 0 ? 'active' : '';
        html += `<button class="filter-btn ${isActive}" data-filter="${cat.id}">${cat.name}</button>`;
    });
    container.innerHTML = html;
}

// ================== FILTER FUNCTION ==================
function filterProducts(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === category);
    });

    let filtered;
    if (category === 'all') {
        filtered = PRODUCTS;
    } else {
        filtered = PRODUCTS.filter(p => p.category === category);
    }

    renderProducts(filtered.slice(0, 8));

    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        if (filtered.length <= 8) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
            loadMoreBtn.setAttribute('data-category', category);
            loadMoreBtn.setAttribute('data-start', '8');
        }
    }
}

// ================== RENDER PRODUCTS ==================
function renderProducts(productsArray) {
    const grid = document.getElementById('productGrid');
    if (!grid) return;

    if (!productsArray || productsArray.length === 0) {
        grid.innerHTML = '<div class="no-products"><i class="fas fa-box-open"></i> No products found</div>';
        return;
    }

    let html = '';
    productsArray.forEach(p => {
        const cartItem = cart.find(item => item.id === p.id);
        const inCart = cartItem ? true : false;

        html += `
            <div class="product-card" data-category="${p.category}" data-id="${p.id}">
                <div class="product-image">
                    <img src="${p.Image}" alt="${p.name}" width="250">
                </div>
                <div class="product-category">${p.category}</div>
                <h3 class="product-title">${p.name}</h3>
                <div class="product-store">
                    <i class="fas fa-store"></i> ${p.store}
                </div>
                <div class="product-price">$${p.price.toFixed(2)}</div>
                <div class="product-stats">
                    <span class="sales">
                        <i class="fas fa-chart-line"></i> ${p.sales} sales
                    </span>
                    <span class="rating">
                        <i class="fas fa-star"></i> ${p.rating}<span class="rating-count">(${p.reviews})</span>
                    </span>
                </div>
                <button class="add-to-cart-btn ${inCart ? 'in-cart' : ''}" onclick="addToCart(${p.id})">
                    <i class="fas ${inCart ? 'fa-check' : 'fa-cart-plus'}"></i> 
                    ${inCart ? 'Savatda' : 'Savatga'}
                </button>
            </div>
        `;
    });

    grid.innerHTML = html;
}

// ================== LOAD MORE ==================
function setupLoadMore() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (!loadMoreBtn) return;

    loadMoreBtn.addEventListener('click', function() {
        const category = this.getAttribute('data-category') || 'all';
        const start = parseInt(this.getAttribute('data-start') || '8');

        let products;
        if (category === 'all') {
            products = PRODUCTS;
        } else {
            products = PRODUCTS.filter(p => p.category === category);
        }

        const nextProducts = products.slice(start, start + 4);

        if (nextProducts.length > 0) {
            const grid = document.getElementById('productGrid');
            let html = grid.innerHTML;

            nextProducts.forEach(p => {
                const cartItem = cart.find(item => item.id === p.id);
                const inCart = cartItem ? true : false;

                html += `
                    <div class="product-card" data-category="${p.category}" data-id="${p.id}">
                        <div class="product-image">
                            <img src="${p.Image}" alt="${p.name}" width="250">
                        </div>
                        <div class="product-category">${p.category}</div>
                        <h3 class="product-title">${p.name}</h3>
                        <div class="product-store">
                            <i class="fas fa-store"></i> ${p.store}
                        </div>
                        <div class="product-price">$${p.price.toFixed(2)}</div>
                        <div class="product-stats">
                            <span class="sales">
                                <i class="fas fa-chart-line"></i> ${p.sales} sales
                            </span>
                            <span class="rating">
                                <i class="fas fa-star"></i> ${p.rating}<span class="rating-count">(${p.reviews})</span>
                            </span>
                        </div>
                        <button class="add-to-cart-btn ${inCart ? 'in-cart' : ''}" onclick="addToCart(${p.id})">
                            <i class="fas ${inCart ? 'fa-check' : 'fa-cart-plus'}"></i> 
                            ${inCart ? 'Savatda' : 'Savatga'}
                        </button>
                    </div>
                `;
            });

            grid.innerHTML = html;
            this.setAttribute('data-start', start + 4);

            if (start + 4 >= products.length) {
                this.style.display = 'none';
            }
        } else {
            this.style.display = 'none';
        }
    });
}

// ================== CART ==================
let cart = [];

function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) cart = JSON.parse(savedCart);
    updateCart();
}

function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
    updateCartTotal();
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) cartCount.textContent = cart.length;
}

function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            icon: product.icon,
            category: product.category,
            quantity: 1
        });
    }
    updateCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function updateQuantity(productId, change) {
    const cartItem = cart.find(item => item.id === productId);
    if (!cartItem) return;

    let newQty = cartItem.quantity + change;
    if (newQty < 1) newQty = 1;
    cartItem.quantity = newQty;
    updateCart();
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    if (!cartItems) return;

    if (cart.length === 0) {
        cartItems.innerHTML = `<div class="empty-cart">Savat bo'sh</div>`;
        return;
    }

    let html = '';
    cart.forEach(item => {
        html += `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-info">
                    <i class="${item.icon} cart-item-icon"></i>
                    <div>
                        <h4>${item.name}</h4>
                        <span class="cart-item-price">$${item.price.toFixed(2)}</span>
                    </div>
                </div>
                <div class="cart-item-controls">
                    <button class="cart-qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="cart-item-qty">${item.quantity}</span>
                    <button class="cart-qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="cart-remove-btn" onclick="removeFromCart(${item.id})">X</button>
                </div>
            </div>
        `;
    });

    cartItems.innerHTML = html;
}

function updateCartTotal() {
    const totalElement = document.getElementById('cartTotal');
    if (!totalElement) return;

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    totalElement.textContent = `$${total.toFixed(2)}`;
}

function toggleCart() {
    const cartPanel = document.getElementById('cartPanel');
    if (cartPanel) cartPanel.classList.toggle('open');
}

// ================== EVENT LISTENERS ==================
function addEventListeners() {
    document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);

    document.getElementById('filterButtons')?.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-btn');
        if (btn) filterProducts(btn.dataset.filter);
    });

    document.getElementById('cartIcon')?.addEventListener('click', toggleCart);
    document.getElementById('cartClose')?.addEventListener('click', toggleCart);

    // Savat panel endi faqat X bosilganda yopiladi
}
