const undervisere = ["Anders", "Alan", "Stine", "Lau"];

console.log(undervisere);

const section = document.querySelector("section");

undervisere.forEach(visNavne);

function visNavne(elm, i) {
  section.innerHTML += `<p>${elm} har index ${i}d</p>`;
}
