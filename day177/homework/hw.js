let btn = document.getElementById("btn");

btn.addEventListener("submit", (e) => {
    e.preventDefault();

    let info = {
        name: e.target.name.value.trim(),
        email: e.target.email.value.trim(),
        phone: e.target.phone.value.trim(),
        password: e.target.password.value.trim(),
        confirmPassword: e.target.confirmPassword.value.trim()
    };


    


    console.log(info);

    alert("Account created!");

    
});