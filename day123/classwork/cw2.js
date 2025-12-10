//შექმენი input ველი რომელიც მიიღებს მომხმარებლის ასაკს და მეორე input რომელიც მიიღებს  რიცხვს თუ რამდენი წლით უნდა მოგზაურობა მომავალში, calculate ღილაკზე დაჭერის შემდეგ ამუშავდე კონსტრუქტორის ფუნქცია რომელიც გამოითვლის თუ რამდენი წლის იქნება მომხმარებელი დროში მოგზაურობის შემდეგ, შედეგი გამოიტანეთ საიტზე

let name = document.getElementById("name");
let age = document.getElementById("place");
let btn = document.getElementById("cal");

function sum(name, place) {
    this.name = name;
    this.place = place;

    this.show = function () {
        console.log("calculated time: " + place);
    }
}

btn.addEventListener("click", function () {
    let info = new sum(name.value, age.value);
    btn.innerText = info.show();
});
