const buttonJS = document.querySelector(".turnOnButton");
const money = document.querySelector(".price-text-style");
const sliderJS = document.querySelector(".slider");


sliderJS.addEventListener("input", function (event) {
  const percent = ((sliderJS.value - 1) / 4) * 100;
  sliderJS.style.backgroundSize = percent + "%";

  if (event.target.value === "1") {
    money.textContent = "$8.00";
  }
  if (event.target.value === "2") {
    money.textContent = "$12.00";
  }
  if (event.target.value === "3") {
    money.textContent = "$16.00";
  }
  if (event.target.value === "4") {
    money.textContent = "$24.00";
  }
  if (event.target.value === "5") {
    money.textContent = "$36.00";
  }
 
});

function choose() {
   buttonJS.classList.toggle("active");
  
 }

