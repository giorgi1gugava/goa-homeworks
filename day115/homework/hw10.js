let random = Math.floor(Math.random() * 10) + 1;
let guess = prompt("შეიყვანე რიცხვი 1-დან 10-მდე:");

if (guess == random) {
  alert("სწორია!");
} else {
  alert("ცდები!");
}
