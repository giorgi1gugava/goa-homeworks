//შექმენი ობიექტი person, რომელსაც ექნება "name", "age" და "city".
//for...in ციკლით გამოიტანე თითოეული key და მისი value.

let person = {
    "name" : "gio",
    "age" : 1,
    "city" : "tbilisi"
}
for (let i in person){
    console.log(person[i])
    console.log(person)
}