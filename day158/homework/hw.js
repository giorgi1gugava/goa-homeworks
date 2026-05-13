let form = document.getElementById("form");
let form2 = document.getElementById("form2");

let list = JSON.parse(localStorage.getItem("acounts")) || [];

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let acc = {
        name:e.target.name.value,
        email:e.target.email.value,
        password:e.target.password.value
    };

    list.push(acc);
    console.log(list);
    localStorage.setItem("acounts", JSON.stringify(list));

    form.reset();
    form.style.display = "none";
    form2.style.display ="flex";

    

});


form2.addEventListener("submit", (e)=>{
    e.preventDefault();
    let email = e.target.email2.value;
    let password =e.target.password2.value;

    let info = JSON.parse(localStorage.getItem("acounts")) ;

    console.log(info);
    for(let i of info){
        if(i.email === email && i.password === password){
            alert("log in");
            return;
        } else{
            alert("somthing wrong");
            return;
        }

    }
    form.reset();



});



