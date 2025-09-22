let products = [];
let displayedCount = 0;
const step = 5;

const container = document.getElementById("product-container");
const loadMoreBtn = document.getElementById("load-more");
const searchInput = document.getElementById("search");

fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => {
    products = data;
    displayProducts();
  });

function displayProducts() {
  const toDisplay = products.slice(displayedCount, displayedCount + step);
  toDisplay.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="">
      <h4>${product.title}</h4>
      <p>$${product.price}</p>
    `;
    card.addEventListener("click", () => {
      window.location.href = `product.html?id=${product.id}`;
    });
    container.appendChild(card);
  });
  displayedCount += step;
  if (displayedCount >= products.length) {
    loadMoreBtn.style.display = "none";
  }
}

loadMoreBtn.addEventListener("click", () => {
  displayProducts();
});

searchInput.addEventListener("input", () => {
  const term = searchInput.value.toLowerCase();
  const filtered = products.slice(0, displayedCount).filter(product =>
    product.title.toLowerCase().includes(term)
  );

  container.innerHTML = "";

  if (filtered.length === 0) {
    container.innerHTML = "<p>No products found</p>";
  } else {
    filtered.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${product.image}" alt="">
        <h4>${product.title}</h4>
        <p>$${product.price}</p>
      `;
      card.addEventListener("click", () => {
        window.location.href = `product.html?id=${product.id}`;
      });
      container.appendChild(card);
    });
  }
});
