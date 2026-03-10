let transport = prompt("შეიყვანე ტრანსპორტი (car, bus, bike, train):");

switch(transport) {
  case "car":
    console.log("მანქანა - პირადი ტრანსპორტი");
    break;

  case "bus":
    console.log("ავტობუსი - საზოგადოებრივი ტრანსპორტი");
    break;

  case "bike":
    console.log("ველოსიპედი - ორბორბლიანი ტრანსპორტი");
    break;

  case "train":
    console.log("მატარებელი - სარკინიგზო ტრანსპორტი");
    break;

  default:
    console.log("უცნობი ტრანსპორტი");
}