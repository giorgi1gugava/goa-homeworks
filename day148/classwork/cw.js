/*1)შექმენი სია სადაც მოთავსებული იქნება ადამიანის სახელები , დაახლოებით 10 სახელი

თქბენიდ დავალებაა რომ filter მეთოდის დახმარებით შექმნათ ახალი სია სადაც ინქებიან მხოლოდ ის სახელები რომელშიც ასობის რაოდენობა იქნება 5 ზე მეტი და და იწყება g ასოზე

ეს დავალება შეასრულეთ single line function ითაც და ჩვეულებრივ return keyword ის გამოყენებითაც*/






const names = ["giorgi", "goga", "nika", "gabrieli", "dato", "givi", "luka", "giora", "ani", "gela"];

const newNames = names.filter(name => name.length > 5 && name.startsWith("g"));

console.log(newNames);




/*const newNames = names.filter(function(name){
    return name.lenght > 5 && name.startsWith("g")

})*/