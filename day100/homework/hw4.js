let num1 = Number(prompt("შეიყვანე პირველი რიცხვი:"));
let num2 = Number(prompt("შეიყვანე მეორე რიცხვი:"));
let num3 = Number(prompt("შეიყვანე მესამე რიცხვი:"));

let max;
let min;

if (num1 >= num2 && num1 >= num3) {
  max = num1;
} else if (num2 >= num1 && num2 >= num3) {
  max = num2;
} else {
  max = num3;
}

if (num1 <= num2 && num1 <= num3) {
  min = num1;
} else if (num2 <= num1 && num2 <= num3) {
  min = num2;
} else {
  min = num3;
}

console.log("ყველაზე დიდი რიცხვი არის: " + max);
console.log("ყველაზე პატარა რიცხვი არის: " + min);

if (max % 2 === 0) {
  console.log("ყველაზე დიდი რიცხვი ლუწია");
} else {
  console.log("ყველაზე დიდი რიცხვი კენტია");
}
