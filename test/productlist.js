const params = new URLSearchParams(window.location.search);
const category = params.get("cat");

const categoryTitle = document.querySelector("#categoryTitle");

categoryTitle.textContent = category;
const endpoint = "https://kea-alt-del.dk/t7/api/products?limit=100";

const produktliste = document.querySelector(".produktliste");

fetch(endpoint)
  .then((res) => res.json())
  .then((products) => {
    const filteredProducts = products.filter((product) => product.category === category);

    filteredProducts.forEach((product) => {
      produktliste.innerHTML += `
        <a href="productdetails.html?id=${product.id}" class="product-link">
          <article class="card">

            <div class="product-image">
              <img
                src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
                alt="${product.productdisplayname}"
              >
            </div>

            <div class="product-info">
              <p class="price">${product.price} kr.</p>

              <h2>${product.productdisplayname}</h2>

              <p class="brand">${product.brandname}</p>

              <p class="category">${product.category}</p>
            </div>

          </article>
        </a>
      `;
    });
  });
