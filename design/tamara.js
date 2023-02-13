custom.addEventListener("input", function(event){

    if(bill.value > 0 && people.value > 0 && custom.value > 0){
      console.log(event.target.value)
      let tipAmount = (bill.value / people.value) * (event.target.value/100);
      tip.innerHTML = tipAmount;
      let totalAmount = (tipAmount*people.value);
      total.innerHTML = totalAmount;
    }
  })

  people.addEventListener("input", function(event){
    // console.log(event.target.value)
    if(event.target.value === "0"){
     error.style.display = "inline";
    }else{
     error.style.display = "none";
    }    
  })

  function choose1(){
    buttonX.style.backgroundColor = "#A8BFC9";
    svgX.classList.add("active");
    buttonO.style.backgroundColor = "#1A2A33";
    svgO.classList.remove("active");
}

questions.forEach(question => {
    question.addEventListener("click", ()=> {
        question.classList.toggle("active");
    })
})