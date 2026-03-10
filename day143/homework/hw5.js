let num = Number(prompt("შეიყვანე რიცხვი:"));

switch(true) {
  case (num === 0):
    console.log("რიცხვი არის 0");
    break;

  case (num % 2 === 0):
    console.log("რიცხვი არის ლუწი");
    break;

  case (num % 2 !== 0):
    console.log("რიცხვი არის კენტი");
    break;

  default:
    console.log("არასწორი რიცხვი");
}