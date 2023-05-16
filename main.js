const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const hamburguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const shoppingCart = document.querySelector(".navbar-shopping-cart");
const itemsOnShoppingCart = document.querySelector(".shopping-cart");
const backArrow = document.querySelector(".arrow");

const productDetailContainer = document.querySelector(".product-detail");
const iconCloseProductDetail = document.querySelector(".close-product-detail");


menuEmail.addEventListener("click", toggleDesktopMenu);
hamburguerMenu.addEventListener("click", toggleMobileMenu);
shoppingCart.addEventListener("click", showShoppingCart);
backArrow.addEventListener("click", backShoppingCart);
iconCloseProductDetail.addEventListener("click", closeProductDetail);


function toggleDesktopMenu(){
    const isShoppingCartOpen = !itemsOnShoppingCart.classList.contains("inactive");

    if(isShoppingCartOpen){
        itemsOnShoppingCart.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    const isShoppingCartOpen = !itemsOnShoppingCart.classList.contains("inactive");

    const isProductDetailOpen = !productDetailContainer.classList.contains("inactive");
    
    if(isShoppingCartOpen){
        itemsOnShoppingCart.classList.add("inactive");
    }

    if(isProductDetailOpen){
        productDetailContainer.classList.add("inactive");
    }
    
    mobileMenu.classList.toggle("inactive");
}

function showShoppingCart(){
    var isMobileMenuOpen = !mobileMenu.classList.contains("inactive");
    var isDesktopMenuOpen = !desktopMenu.classList.contains("inactive");
    
    const isProductDetailOpen = !productDetailContainer.classList.contains("inactive");

    if(isMobileMenuOpen){
        mobileMenu.classList.add("inactive");
    }
    
    if(isDesktopMenuOpen){
        desktopMenu.classList.add("inactive");
    }
    
    if(isProductDetailOpen){
        productDetailContainer.classList.add("inactive");
    }

    itemsOnShoppingCart.classList.toggle("inactive");
    
}
function backShoppingCart(){
    itemsOnShoppingCart.classList.toggle("inactive");
}

function openProductDetailAside(){
    const isShoppingCartOpen = !itemsOnShoppingCart.classList.contains("inactive");

    if(isShoppingCartOpen){
        itemsOnShoppingCart.classList.add("inactive");
    }

    productDetailContainer.classList.remove("inactive");
}

function closeProductDetail(){
    productDetailContainer.classList.add("inactive")
;}

const productList = [];
productList.push({
    name: "Wand: Elm and Phoenix's feather core",
    price: 120,
    image: "https://images.pexels.com/photos/8391465/pexels-photo-8391465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    name: "Wand: Oak and Dragon's heart core",
    price: 78,
    image: "https://images.pexels.com/photos/8391465/pexels-photo-8391465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    name: "Wand: Willow and Unicorn's hair core",
    price: 67,
    image: "https://images.pexels.com/photos/8391465/pexels-photo-8391465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

/* <div class="product-card">
<img src="https://images.pexels.com/photos/8391465/pexels-photo-8391465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" class="product-img">
<div class="product-info">
<div>
<p>$120.00</p>
<p>Arrow</p>
</div>
<figure>
<img src="./icons/bt_add_to_cart.svg"   alt="">
</figure>
</div>
</div> */
const cardsContainer = document.querySelector(".cards-container");

function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        
        const productImg = document.createElement("img");
        productImg.classList.add("product-img");
        productImg.setAttribute("src", product.image);
        productImg.addEventListener("click", openProductDetailAside);
        
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
        
        const productInfoDiv = document.createElement("div");
        
        const productPrice = document.createElement("p");
        productPrice.innerText = "$ " + product.price;
        
        const productName = document.createElement("p");
        productName.innerText = product.name;
        
        const productInfoFigure =  document.createElement("figure");
        
        const addToCartImg = document.createElement("img");
        addToCartImg.setAttribute("src",
        "./icons/bt_add_to_cart.svg");
        
        productInfoFigure.appendChild(addToCartImg);
        
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
        cardsContainer.appendChild(productCard);
    }
    
}

const webPage = document.querySelector("html");
webPage.addEventListener("load", renderProducts(productList));
// renderProducts(productList);




