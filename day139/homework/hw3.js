function numberStatus(num) {
    return num === 0 ? "Zero"
         : num > 0 && num % 2 === 0 ? "Positive Even"
         : num < 0 && num % 2 === 0 ? "Negative Even"
         : num > 0 && num % 2 !== 0 ? "Positive Odd"
         : "Negative Odd";
  }
  
  console.log(numberStatus(8));
  console.log(numberStatus(-4));
  console.log(numberStatus(7));
  console.log(numberStatus(-9));
  console.log(numberStatus(0));