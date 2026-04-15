/*შექმენით map სადაც გექნება მინიმუმ 5 key value წყვილი

შენი დავალებაა:

დაამატო ახალი წყვილი map ში, 

შეცვალო უკვე არსებული მნიშნვნელობა map ში

ამოშალო ერთ ერთი წყვილი mep იდან

შეამოწმე არის თუ არა "name" key შენს მეპში 

გაიგო რამდენი ცალი ელემენტი ინახება map ში

,
ბოლოს გამოიტანე ყველა key ცალ ცალკე თით ხაზზე

გამოიტანე ყველა value ცალ ცალკე თითო ხაზზე

მოგიწევთ დაშალოთ ობიექტი და გადაატაროთ for of/ forEach  */


let myMap = new Map([
    ["name", "Giorgi"],
    ["age", 20],
    ["city", "Tbilisi"],
    ["job", "Developer"],
    ["hobby", "Boxing"]
]);


myMap.set("country", "Georgia");

myMap.set("age", 21);


myMap.delete("job");


console.log(myMap.has("name")); 


console.log(myMap.size);

for (let key of myMap.keys()) {
    console.log(key);
}

for (let value of myMap.values()) {
    console.log(value);
}

myMap.forEach((value, key) => {
    console.log(key + ": " + value);
});