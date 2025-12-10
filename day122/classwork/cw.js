//HTML-ში შექმენით ფორმა სადაც გექნებათ სამი input ველი, სახელისთვის, გვარისთვის და ასაკისთვის. submit-ღილაკის გამოყენებით გააგზავნეთ შეყვანილი ინფორმაცია რომელიც გამოჩნდება ლისტში, თითოეული გაგზავნის შემდეგ უნდა დაემატოს ახალი ლისტი სადაც გამოიტანთ იმ ინფორმაციას რაც input-ში შეიყვანეთ. ყოველი submit ღილაკზე დაჭერის შემდეგ უნდა იქმნებოდეს ახალი ლისტი. ეს ყველაფერი გაალამაზეთ CSS-ის გამოყენებით. დაუმატეთ თქვენ ფორმებს ვალიდაციები

document.getElementById("info").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let age = document.getElementById("age").value;

    let li = document.createElement("li");
    li.textContent = `name: ${name} | surname: ${surname} | age: ${age}`;

    document.getElementById("List").appendChild(li);

    document.getElementById("info").reset();
});
