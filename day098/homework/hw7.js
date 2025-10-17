let userName = prompt("enter ur name:");
let userAge = prompt("enter ur age:");
let age = Number(userAge)

if (userName == "nika" && age > 18){
    console.log("your name is nika and u are adult")
} else if(userName == "dorblavaso" && age < 18){
    console.log("you are dorbla and too young")
} else{
    console.log("u have weird name and age")
}