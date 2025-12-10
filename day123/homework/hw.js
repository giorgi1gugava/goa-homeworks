function human(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;

    this.Info = function() {
        return this.name + " - " + this.profession;
    };
}

document.getElementById("userForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let profession = document.getElementById("profession").value;


    let user = new human(name, age, profession);

    let resultDiv = document.getElementById("result");
    let p = document.createElement("p");
    p.textContent = user.Info();
    resultDiv.appendChild(p);
});