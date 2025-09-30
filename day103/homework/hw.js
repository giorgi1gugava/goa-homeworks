//შექმენი ფუნქცია sumArray(arr), რომელიც მიიღებს რიცხვების სიას პარამეტრად და დააბრუნებს სიაში მყოფი რიცხვების  ჯამს.
let arr = [1,2,3]
function sumArray(arr){
        let sum = 0;
        for (let i =0; i < arr; i +=1){
        sum += arr[i];
        }
        return sum;
}
console.log(sumArray(arr));

