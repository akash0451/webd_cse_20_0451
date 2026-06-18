let count = localStorage.getItem("cartCount") || 0;

const cartCount = document.getElementById("cart-count");

cartCount.textContent = count;

document.querySelectorAll(".add-btn").forEach(button => {

button.addEventListener("click", () => {

count++;

cartCount.textContent = count;

localStorage.setItem("cartCount", count);

button.innerText = "Added ✓";

setTimeout(() => {
button.innerText = "Add To Cart";
},1000);

});

});