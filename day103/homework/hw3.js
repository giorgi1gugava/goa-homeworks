//შექმენი ფუქნცია findMin(arr) – მიიღოს სია და დააბრუნოს ყველაზე პატარა რიცხვი. 
function findMin(arr) {
    let minFound = false;
    let minValue;
  
    for (let i in arr) {
      if (!minFound) {
        minValue = arr[i];
        minFound = true;
      } else if (arr[i] < minValue) {
        minValue = arr[i];
      }
    }
  
    return minValue; 
  }
  