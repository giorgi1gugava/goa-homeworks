function User(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
}


const usersList = [];


function createUser() {
    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;


    const newUser = new User(name, email, password);


    usersList.push(newUser);

 
    console.log(usersList);


    document.getElementById("nameInput").value = "";
    document.getElementById("emailInput").value = "";
    document.getElementById("passwordInput").value = "";
}