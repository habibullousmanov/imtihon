// KATEGORIYALAR RO'YXATI
const CATEGORIES = [
    { id: 'all', name: 'All', icon: 'fa-solid fa-border-all' },
    { id: 'Bogot', name: 'ELectronics', icon: 'fa-solid fa-laptop' },
    { id: 'Food', name: 'Food', icon: 'fa-solid fa-utensils' },
    { id: 'Books', name: 'Books', icon: 'fa-solid fa-book' },
    { id: 'Clothes', name: 'Clothes', icon: 'fa-solid fa-shirt' },
    { id: 'Grocery', name: 'Grocery', icon: 'fa-solid fa-basket-shopping' },
    { id: 'Furniture', name: 'Furniture', icon: 'fa-solid fa-couch' },
    { id: 'Baby care', name: 'Baby care', icon: 'fa-solid fa-baby' }
];

// MAHSULOTLAR RO'YXATI (PRODUCTS)
const PRODUCTS = [
{
    id: 1,
    Image: "./assets/img/image.png",
    name: "MacBook Pro 13\" Big Discount",
    category: "Bogot",
    price: 1999.00,
    originalPrice: 2399.00,
    store: "Eshop Spot",
    sales: 15,
    rating: 5.0,
    reviews: 10,
    icon: "fa-solid fa-laptop",
    discount: true,
    featured: true
}
,
    {
        id: 2,
        Image: "./assets/img/image copy.png" ,
        name: "Joystick Come Controller",
        category: "Bogot",
        price: 1899.00,
        store: "Eshop Spot",
        sales: 15,
        rating: 6.0,
        reviews: 10,
        icon: "fa-solid fa-gamepad",
        discount: false
    },
    {
        id: 3,
        Image:"./assets/img/image copy 2.png",
        name: "Movie Air Phantom 4 pro",
        category: "Bogot",
        price: 1899.00,
        store: "Eshop Spot",
        sales: 15,
        rating: 5.0,
        reviews: 10,
        icon: "fa-solid fa-camera-drone",
        discount: false
    },
    {
        id: 4,
        Image:"./assets/img/image copy 4.png",
        name: "Nikon D7500 20.9 Mp Touchscreen",
        category: "Bogot",
        price: 1999.00,
        store: "Eshop Spot",
        sales: 16,
        rating: 5.0,
        reviews: 10,
        icon: "fa-solid fa-camera",
        discount: true
    },
    {
        id: 5,
        Image:"./assets/img/image copy 5.png",
        name: "Apple Airpods Pro White",
        category: "Grocery",
        price: 1899.00,
        store: "Eshop Spot",
        sales: 15,
        rating: 5.0,
        reviews: 10,
        icon: "fa-solid fa-headphones",
        discount: false
    },
    {
        id: 6,
        Image:"./assets/img/image copy 6.png",
        name: "Apple iMac Retina 5K 27\"",
        category: "Furniture",
        price: 1899.00,
        store: "Eshop Spot",
        sales: 15,
        rating: 5.0,
        reviews: 10,
        icon: "fa-solid fa-desktop",
        discount: false
    },
    {
        id: 7,
        Image:"./assets/img/image copy 7.png",
        name: "Apple iPhone X 256GB 3GB RAM",
        category: "Bogot",
        price: 1899.00,
        store: "Eshop Spot",
        sales: 15,
        rating: 5.0,
        reviews: 10,
        icon: "fa-solid fa-wifi",
        discount: false
    },
    {
        id: 8,
        Image:"./assets/img/image copy 8.png",
        name: "BEATS SOLO PRO 1 Wireless Headphone",
        category: "Grocery",
        price: 1899.00,
        store: "Eshop Spot",
        sales: 24,
        rating: 5.0,
        reviews: 28,
        icon: "fa-solid fa-headphones",
        discount: true
    },
    {
        id: 9,
        Image:"./assets/img/image copy 9.png",
        name: "TP-Link Archer AX53 AX3000 Dual Band",
        category: "Furniture",
        price: 2099.00,
        store: "Eshop Spot",
        sales: 12,
        rating: 4.5,
        reviews: 8,
        icon: "fa-solid fa-tv",
        discount: false
    },
    {
        id: 10,
        Image:"./assets/img/image copy 10.png",
        name: "Apple iPhone X 256GB 3GB RAM",
        category: "Bogot",
        price: 899.00,
        store: "Eshop Spot",
        sales: 32,
        rating: 5.0,
        reviews: 18,
        icon: "fa-solid fa-computer-mouse",
        discount: true
    },
    {
        id: 11,
        Image:"./assets/img/image copy 11.png",
        name: "BEATS SOLO PRO 1 Wireless Headphone",
        category: "Bogot",
        price: 1499.00,
        store: "Eshop Spot",
        sales: 21,
        rating: 5.0,
        reviews: 15,
        icon: "fa-solid fa-tablet",
        discount: false
    },
    {
        id: 12,
        Image:"./assets/img/image copy 12.png",
        name: "TP-Link Archer AX53 AX3000 Dual Band",
        category: "Baby care",
        price: 1599.00,
        store: "Eshop Spot",
        sales: 9,
        rating: 4.5,
        reviews: 6,
        icon: "fa-solid fa-video",
        discount: true
     },
    {
        id:13,
        Image:"./assets/img/image copy 13.png",
        name:"Apple iMac Retina 5K 27",
        category:"Bogot",
        price:1999.00,
        store: "Eshop Spot",
        sales: 9,
        rating: 5,
        reviews: 19,
        icon: "fa-solid fa-video",
        discount: true
    },
     {
        id:14,
        Image:"./assets/img/image copy 14.png",
        name:"TP-Link Archer AX53 AX3000 Dual Band",
        category:"Bogot",
        price:1999.00,
        store: "Eshop Spot",
        sales: 9,
        rating: 5,
        reviews: 19,
        icon: "fa-solid fa-video",
        discount: true        
     },
     {
        id:15,
        Image:"./assets/img/image copy 15.png",
        name:"Apple iPhone X 256GB 3GB RAM",
        category:"Clothes",
        price:1999.00,
        store: "Eshop Spot",
        sales: 9,
        rating: 5,
        reviews: 19,
        icon: "fa-solid fa-video",
        discount: true                
     },
     {
        id:16,
        Image:"./assets/img/image copy 16.png",
        name:"BEATS SOLO PRO 1 Wireless Headphone",
        category:"Clothes",
        price:1999.00,
        store: "Eshop Spot",
        sales: 9,
        rating: 5,
        reviews: 19,
        icon: "fa-solid fa-video",
        discount: true            
     },

     {
        id:18,
        Image:"./assets/img/image copy 18.png",
        name:"BEATS SOLO PRO 1 Wireless Headphone",
        category:"Furniture",
        price:1999.00,
        store: "Eshop Spot",
        sales: 9,
        rating: 5,
        reviews: 19,
        icon: "fa-solid fa-video",
        discount: true            
     },
     {
        id:19,
        Image:"./assets/img/image copy 19.png",
        name:"TP-Link Archer AX53 AX3000 Dual Band",
        category:"Bogot",
        price:1999.00,
        store: "Eshop Spot",
        sales: 9,
        rating: 5,
        reviews: 19,
        icon: "fa-solid fa-video",
        discount: true            
     },
     {
        id:20,
        Image:"./assets/img/image copy 20.png",
        name:"Apple iPhone X 256GB 3GB RAM",
        category:"Clothes",
        price:1999.00,
        store: "Eshop Spot",
        sales: 9,
        rating: 5,
        reviews: 19,
        icon: "fa-solid fa-video",
        discount: true            
     },
     {
        id:21,
        Image:"./assets/img/image copy 21.png",
        name:"BEATS SOLO PRO 1 Wireless Headphone",
        category:"Clothes",
        price:1999.00,
        store: "Eshop Spot",
        sales: 9,
        rating: 5,
        reviews: 19,
        icon: "fa-solid fa-video",
        discount: true            
     },
     {
        id:22,
        Image:"./assets/img/image copy 22.png",
        name:"TP-Link Archer AX53 AX3000 Dual Band",
        category:"Bogot",
        price:1999.00,
        store: "Eshop Spot",
        sales: 9,
        rating: 5,
        reviews: 19,
        icon: "fa-solid fa-video",
        discount: true            
     },

     {
        id:24,
        Image:"./assets/img/image copy 24.png",
        name:"BEATS SOLO PRO 1 Wireless Headphone",
        category:"Bogot",
        price:1999.00,
        store: "Eshop Spot",
        sales: 9,
        rating: 5,
        reviews: 19,
        icon: "fa-solid fa-video",
        discount: true            
     },
     {
        id:25,
        Image:"./assets/img/image copy 25.png",
        name:"TP-Link Archer AX53 AX3000 Dual Band",
        category:"Furniture",
        price:1999.00,
        store: "Eshop Spot",
        sales: 9,
        rating: 5,
        reviews: 19,
        icon: "fa-solid fa-video",
        discount: true            
     },
     {
        id:26,
        Image:"./assets/img/image copy 26.png",
        name:"Apple iPhone X 256GB 3GB RAM",
        category:"Bogot",
        price:1999.00,
        store: "Eshop Spot",
        sales: 9,
        rating: 5,
        reviews: 19,
        icon: "fa-solid fa-video",
        discount: true            
     }
];

// STATISTIKA MA'LUMOTLARI (qo'shimcha)
const STORE_STATS = {
    totalProducts: PRODUCTS.length,
    totalCategories: CATEGORIES.length - 1,
    topRated: PRODUCTS.filter(p => p.rating >= 5.0).length,
    weeklyDeals: PRODUCTS.filter(p => p.discount).length
};
const productList = document.getElementById("product-list");
const loadMoreBtn = document.getElementById("loadMoreBtn");

let currentIndex = 0;
const step = 6; // har bosganda nechta chiqadi

function renderProducts() {
    const nextProducts = PRODUCTS.slice(currentIndex, currentIndex + step);

    nextProducts.forEach(product => {
        const div = document.createElement("div");
        div.className = "product-card";
        div.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
        `;
        productList.appendChild(div);
    });

    currentIndex += step;

    // agar mahsulot tugasa tugmani yashiramiz
    if (currentIndex >= PRODUCTS.length) {
        loadMoreBtn.style.display = "none";
    }
}

// tugma bosilganda
loadMoreBtn.addEventListener("click", renderProducts);

// sahifa yuklanganda birinchi mahsulotlar chiqadi
renderProducts();