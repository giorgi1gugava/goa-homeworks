function triangleType(a, b, c) {
    return a === b && b === c ? "Equilateral"
         : a === b || a === c || b === c ? "Isosceles"
         : "Scalene";
  }
  
  console.log(triangleType(3, 3, 3));
  console.log(triangleType(3, 3, 5));
  console.log(triangleType(5, 3, 5));
  console.log(triangleType(3, 4, 5));
  console.log(triangleType(2, 3, 4));