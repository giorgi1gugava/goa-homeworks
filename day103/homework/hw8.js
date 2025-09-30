//შექმენი ფუნქცია რომელსაც გადაეცემა რიცხვებით სავსე სია,შენი დავალებაა რომ გაიგო ამ სიაში მყოფი ლუწი რიცხვების რაოდენობა და კენტი რიცხვების ჯამი.

let numbers = [1, 2, 3, 4, 5, 6];

function countEvenAndSumOdd(arr) {
    let evenCount = 0;
    let oddSum = 0;
  
    for (let i = 0; i < arr.length; i+=1) {
      if (arr[i] % 2 === 0) {
        evenCount++;
      } else {

        oddSum += arr[i];
      }
    }
  
  }


  let result = countEvenAndSumOdd(numbers);



  console.log("ლუწი რიცხვების რაოდენობა:", result.evenCount); 


  console.log("კენტი რიცხვების ჯამი:", result.oddSum);          
    