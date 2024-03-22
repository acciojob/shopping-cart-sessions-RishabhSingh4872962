// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}" onclick="addToCart(${product.id})">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

let cart=[]
// Render cart list
function renderCart() {}

// Add item to cart
function addToCart(productId) {
	let productObj=products.find((obj)=>obj.id==productId)
	cart.push(productObj);
	console.log(cart)
}

// Remove item from cart
function removeFromCart(productId) {
	
	cart.splice(product.findIndex((ele)=>ele.id==productId),1);
	console.log(cart)
}

// Clear cart
function clearCart() {}

// Initial render
renderProducts();
renderCart();
