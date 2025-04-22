const products = [
  { id: 1, name: "Aloe Vera", price: 5 },
  { id: 2, name: "Peace Lily", price: 8 },
  { id: 3, name: "Spider Plant", price: 6 },
  { id: 4, name: "Fiddle Leaf Fig", price: 15 },
];

let cartCount = 0;

function addToCart(productName) {
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;
  alert(`${productName} added to cart!`);
}

function displayProducts() {
  const productList = document.getElementById("product-list");
  products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";
    productDiv.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <button onclick="addToCart('${product.name}')">Add to Cart</button>
    `;
    productList.appendChild(productDiv);
  });
}

displayProducts();
