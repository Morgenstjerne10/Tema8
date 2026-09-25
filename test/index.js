const productIds = [2357, 2363, 2365, 2354, 2467, 2474, 2286, 2550];

const productGrid = document.querySelector("#productGrid");
const catlisteContainer = document.querySelector("#catlisteContainer");

// VIS DE 8 UDVALGTE PRODUKTER
productIds.forEach((id) => {
  productGrid.innerHTML += `
    <a href="productdetails.html?id=${id}" class="product-link">
      <article class="card">

        <div class="product-image">
          <img
            src="https://kea-alt-del.dk/t7/images/webp/640/${id}.webp"
            alt="Produkt ${id}"
          >
        </div>

      </article>
    </a>
  `;
});

// HENT KATEGORIER
const categoryEndpoint = "https://kea-alt-del.dk/t7/api/categories";

fetch(categoryEndpoint)
  .then((res) => res.json())
  .then((categories) => {
    categories
      .filter((category) => category.category !== "Accessories")
      .forEach((category) => {
        catlisteContainer.innerHTML += `
          <a href="productlist.html?cat=${category.category}">
            ${category.category}
          </a>
        `;
      });
  });
