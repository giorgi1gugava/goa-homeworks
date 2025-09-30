//დაწერე ფუნქცია countEvenOdd(arr), რომელიც მიიღებს რიცხვების სიას და დაბეჭდავს რამდენია ლუწი და რამდენი კენტი.

function countEvenOdd(arr) {
    let even = 0;
    let odd = 0;
  
    for (let num of arr) {
      if (num % 2 === 0) {
        even += 1;
      } else {
        odd += 1;
      }
    }
  
    console.log("ლუწი რიცხვების რაოდენობა:", even);
    console.log("კენტი რიცხვების რაოდენობა:", odd);
  }
  