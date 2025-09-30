//შექმენით ფუნქცია average(arr) – მიიღოს რიცხვების სია და დააბრუნოს მათი საშუალო (ჯამი / რაოდენობა).


function average(arr) {
    let sum = 0;
    let count = 0;
  
    for (let i = 0; arr[i] !== undefined; i++) {
      sum += arr[i];
      count++;
    }
  
    if (count === 0) {
      return 0; 
    }
  
    return sum / count;
  }
  