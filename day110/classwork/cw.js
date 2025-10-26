//შექმენით სია რომელშიც იქნება რიცხვები, შემდეგ შექმენით ორი დამატებითი სია, ერთ სიაში ჩაამატეთ მთავარი სიიდან მხოლოდ ლუწი რიცხვები ხოლო მეორეში მხოლოდ კენტები.



let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let luwi = [];
let kenti =[];


for(let i =0;  i < number.length; i+=1) {
    if(number[i] % 2 === 0) {
        luwi.push(number[i]);
    } else{
        kenti.push(number[i]);
    }
}

console.log(luwi);
console.log(kenti);