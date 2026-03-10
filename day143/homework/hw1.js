let month = Number(prompt("შეიყვანე თვის ნომერი (1-12):"));

switch(month) {
  case 12:
  case 1:
  case 2:
    console.log("ზამთარი");
    break;

  case 3:
  case 4:
  case 5:
    console.log("გაზაფხული");
    break;

  case 6:
  case 7:
  case 8:
    console.log("ზაფხული");
    break;

  case 9:
  case 10:
  case 11:
    console.log("შემოდგომა");
    break;

  default:
    console.log("არასწორი თვე");
}