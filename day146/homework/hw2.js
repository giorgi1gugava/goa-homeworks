/* შექმენი ახალი მასივი, სადაც ყველა სახელი იქნება დიდი ასოებით.const names = ["nika", "ana", "gio"];*/


const names = ["nika", "ana", "gio"];

const namees= names.map(function (num){
    return num.toUpperCase();
});

console.log(namees);