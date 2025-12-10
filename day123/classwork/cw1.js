//შექმენით ორი input ველი რომელშიც შეიყვანთ თქვენს სახელს და ასაკს, შემდეგ კონსტრუქტორის გამოყენებით დაწერეთ ფუნქცია რომელიც საიტზე გამოიტანს  თქვენს შეყვანილ სახელს და  ასაკს

let inp = document.getElementById("inp");  
let inp1 = document.getElementById("inp1"); 
let button = document.getElementById("submit");


function Info(name, age) {
    this.name = name;

    this.age = age;

    this.show = function() {
        console.log("სახელი: " + name + ", ასაკი: " + age);
    }
}


button.addEventListener("click", function() {

    let user = new Info(inp.value, inp1.value);
    button.innerText = user.show();

});