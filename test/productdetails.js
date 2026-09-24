const id = new URLSearchParams(window.location.search).get("id");
console.log(id);

const endpoint = `https://kea-alt-del.dk/t7/api/products/${id}`;
const bachbutton = document.querySelector("#backbutton");

const product = document.querySelector("section");

bachbutton.addEventListener("click", () => {
  history.back();
});

fetch(endpoint)
  .then((res) => res.json())
  .then(visData);

function visData(element) {
  console.log(element);

  product.innerHTML += `

    <article class="card">

        <img 
          src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" 
          alt="${element.productdisplayname}"
        >

      <div class="product-info">

        <p class="price">${element.price} kr.</p>

        <h2>${element.productdisplayname}</h2>

        <p class="brand">${element.brandname}</p>

        <p class="category">${element.category}</p>

      </div>

    </article>

`;
}
