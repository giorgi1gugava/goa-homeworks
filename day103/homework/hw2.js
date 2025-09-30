//შექმენი ფუნქცია findMax(arr) – მიიღოს სია და დააბრუნოს უდიდესი რიცხვი. (შეგიძლიათ მოიძიოთ და გააკეთოთ, საჭროა ლოგიკის დაწერა რომ ეს დავალება შეასრულოთ)

function findMax(arr) {


    
    let maxFound = false;
    let maxValue;
  
    for (let i in arr) {
      if (!maxFound) {

        maxValue = arr[i];
        maxFound = true;
      } else if (arr[i] > maxValue) {


        maxValue = arr[i];
      }
    }
  
    return maxValue; 
  }
  