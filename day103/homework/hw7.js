//შექმენი ფუქნცია რომელსაც გადაეცემა არგუმენტად სია,სადაც მოთავსებული იქნება განსხვავებული მონაცემთა ტიპის ელემენტები,შენი დავალეაბა რომ --> დაითვალო ამ სიაში სტრინგ ტიპის მონაცემების რაოდენობა და ინტეჯერ ტიპის მონაცემების ჯამი, ანუ სიაში უდნა დათვალო რამდენი სტრინგია,და ინტეჯერის შემთხვევაში უნდა გაიგო სიაში მყოფი ინტეჯერების(ნამბერების) ჯამი.

let myList = ["hello", 10, 3.14, "world", 7, true, "!", 2];
function countStringsAndSumIntegers(arr) {
    let stringCount = 0;
    let integerSum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'string') {
        stringCount++;
      } else if (typeof arr[i] === 'number' && arr[i] % 1 === 0) {
        integerSum += arr[i];
      }
    }
  
}
  