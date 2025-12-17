// როცა ღილაკს დააჭერს კონსოლის ნაცვლად დომში განახლდეს
let button = document.getElementById("btn");
let p = document.getElementById("par");




button.addEventListener('click', function () {
   let date = new Date();

   let hours = (date.getHours())

   let minutes = (date.getMinutes())
   let seconds = (date.getSeconds())

   p.textContent = (`${hours}: ${minutes}: ${seconds}`);
});