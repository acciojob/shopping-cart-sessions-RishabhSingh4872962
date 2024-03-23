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
const clearCartBtn = document.getElementById("clear-cart-btn");

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}" onclick="addToCart(${product.id})">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

let cart=[];

// Render cart list
function renderCart() { 
	let data=JSON.parse(sessionStorage.getItem("cart")) ;
	if (!data) {
		return;
	} 
	cart=data; 
	cart.forEach((product)=>{
		const li=document.createElement("li");
				li.innerHTML=`${product.name} - $${product.price} <button data-id="${product.id}" onclick="removeFromCart(${product.id})">Remove from Cart</button>`
				cartList.appendChild(li);
	})
}

// Add item to cart
function addToCart(productId) {
	let product=products.find((obj)=>obj.id==productId)
	const li=document.createElement("li");
				li.innerHTML=`${product.name} - $${product.price} <button data-id="${product.id}" onclick="removeFromCart(${product.id})">Remove from Cart</button>`
				cartList.appendChild(li);
	cart.push(product);
			 sessionStorage.setItem("cart",JSON.stringify(cart))
}

// Remove item from cart
function removeFromCart(productId) {
	(this.event.target.parentElement.remove())
	cart.splice(cart.findIndex((prod)=>prod.id==productId),1);
			 sessionStorage.setItem("cart",cart)

}

// Clear cart
clearCartBtn.addEventListener("click",clearCart)
function clearCart() {
	cartList.innerHTML="";
	cart=[];
			 sessionStorage.clear(); 
}

// Initial render
renderProducts();
renderCart();
