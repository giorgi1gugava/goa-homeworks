let num1 = Number(prompt("შეიყვანე პირველი რიცხვი:"));
let operator = prompt("შეიყვანე ოპერატორი (+, -, *, /):");
let num2 = Number(prompt("შეიყვანე მეორე რიცხვი:"));

switch(operator) {
  case "+":
    console.log(num1 + num2);
    break;

  case "-":
    console.log(num1 - num2);
    break;

  case "*":
    console.log(num1 * num2);
    break;

  case "/":
    console.log(num1 / num2);
    break;

  default:
    console.log("არასწორი ოპერატორი");
}