const buttonJS = document.querySelector(".turnOnButton");
const money = document.querySelector(".price-text-style");
const sliderJS = document.querySelector(".slider");
const viewJS = document.querySelector(".pageViews-style");

let  knobJS = true;


function choose() {
  buttonJS.classList.toggle("active");
  knobJS =!knobJS;
  insertValue(sliderJS.value);
  console.log(knobJS);
}


sliderJS.addEventListener("input", function (event) {
  const percent = ((sliderJS.value - 1) / 4) * 100;
  sliderJS.style.backgroundSize = percent + "%";
  insertValue(event.target.value);

});

function insertValue(one){
  if (one === "1" && knobJS) {
    money.textContent = "$8.00";
    viewJS.textContent = "10K pageviews"; 
    
  }
  if (one === "2" && knobJS) {
    money.textContent = "$12.00";
    viewJS.textContent = "50K pageviews"; 
  }
  if (one === "3" && knobJS) {
    money.textContent = "$16.00";
    viewJS.textContent = "100K pageviews"; 
  }
  if (one === "4" && knobJS) {
    money.textContent = "$24.00";
    viewJS.textContent = "500K pageviews"; 
  }
  if (one === "5" && knobJS) {
    money.textContent = "$36.00";
    viewJS.textContent = "1M pageviews"; 
  }



  if (one === "1" && !knobJS) {
    money.textContent = "$12.00";
    viewJS.textContent = "10K pageviews"; 
    
  }
  if (one === "2" && !knobJS) {
    money.textContent = "$36.00";
    viewJS.textContent = "50K pageviews"; 
  }
  if (one === "3" && !knobJS) {
    money.textContent = "$48.00";
    viewJS.textContent = "100K pageviews"; 
  }
  if (one === "4" && !knobJS) {
    money.textContent = "$72.00";
    viewJS.textContent = "500K pageviews"; 
  }
  if (one === "5" && !knobJS) {
    money.textContent = "$108.00";
    viewJS.textContent = "1M pageviews"; 
  }
}

