 //შექმენით ღილაკი როდესაც ამ ღილაკს დავაჭერთ კონსოლში დაიბეჭდოს ამჟამინდელი დრო ასეთი სახით 21:30:07


let button = document.getElementById("btn");





button.addEventListener('click', function () {
   let date = new Date();

   let hours = (date.getHours())

   let minutes = (date.getMinutes())
   let seconds = (date.getSeconds())

   console.log(`${hours}: ${minutes}: ${seconds}`);
});