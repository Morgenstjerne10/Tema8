const endpoint = "https://kea-alt-del.dk/t7/api/products?limit=20";

const produktliste = document.querySelector(".produktliste");

fetch(endpoint)
  .then((res) => res.json())
  .then(visData);

function visData(json) {
  console.log(json);

  json.forEach((element) => {
    produktliste.innerHTML += `
  <a href="productdetails.html?id=${element.id}" class="product-link">
    <article class="card">

      <div class="product-image">
        <img 
          src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" 
          alt="${element.productdisplayname}"
        >
      </div>

      <div class="product-info">

        <p class="price">${element.price} kr.</p>

        <h2>${element.productdisplayname}</h2>

        <p class="brand">${element.brandname}</p>

        <p class="category">${element.category}</p>

      </div>

    </article>
  </a>
`;
  });
}
