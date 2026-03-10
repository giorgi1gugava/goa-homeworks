let color = prompt("შეიყვანე ფერი (red, green, blue):");

switch(color) {
  case "red":
    console.log("ეს არის წითელი ფერი");
    break;

  case "green":
    console.log("ეს არის მწვანე ფერი");
    break;

  case "blue":
    console.log("ეს არის ლურჯი ფერი");
    break;

  default:
    console.log("ასეთი ფერი სისტემაში არ არის");
}