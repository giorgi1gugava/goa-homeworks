let card = document.getElementById("card-num");
let name = document.getElementById("name-p");
let month = document.getElementById("fir-zero");
let year = document.getElementById("sec-zero");
let cvc = document.getElementById("three-num");
let form = document.getElementById("form");

form.addEventListener("submit", function(event){
    event.preventDefault()
    
    
    if (event.target.name.value === ""){
        alert("please enter your name")
    } else{
        name.textContent = event.target.name.value;

    }
    

    
    if(event.target.card.value === "" || event.target.card.value.length != 16){
        alert("enter number");
    } else{
        card.textContent = event.target.card.value;
    }

    if(event.target.month.value === "" || event.target.month.value.length != 2 || event.target.month.value > 12 || event.target.month.value < 1){
        alert("enter month");
    } else{
        month.textContent = event.target.month.value;
    }


    if(event.target.cvc.value === "" || event.target.year.value.length != 2 || event.target.year.value > 99 || event.target.year.value < 10){
        alert("enter year");
    } else{
        year.textContent = event.target.year.value;
    }

    if(event.target.cvc.value === "" || event.target.cvc.value.length != 3){
        alert("enter cvc")
    } else{
        cvc.textContent = event.target.cvc.value;
    }

    event.target.cvc.value = "";
    event.target.year.value = "";
    event.target.month.value = "";
    event.target.card.value = "";
    event.target.name.value = "";


})