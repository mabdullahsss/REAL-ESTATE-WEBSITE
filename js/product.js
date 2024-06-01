//
//
let productCount = localStorage.getItem("product-count");
let address = localStorage.getItem("product-address");
let place = localStorage.getItem("product-place");
let price = localStorage.getItem("product-price");

let ownersArr = [
  "Jake Oslo",
  "Traverse You",
  "Andrew Tate",
  "Grilse Twee",
  "Ali Taha",
  "Mohamed Ramy",
  "Jemmy Cutler",
  "Abdo Magdy",
  "Omar Salah",
  "Karem Hasan",
  "Albert Bah",
  "Welt Jackson",
];

document.querySelector(".landing h1").innerHTML = address;

document.querySelector(".landing .path").innerHTML = `
  <a href="index.html">Home</a>
  /
  <a href="properties.html">Properties</a>
  / ${address}
`;

document.querySelector(".product h2").innerHTML = address;
document.querySelector(".product h2 + p").innerHTML = place;
document.querySelector(".product .price").innerHTML = price;
document.querySelector(
  ".product .owner img"
).src = `images/owner/${productCount}.jpeg`;

document.querySelector(".product .owner .info h3").innerHTML =
  ownersArr[productCount - 1];
