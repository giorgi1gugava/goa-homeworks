//შექმენით ობიექტი კონსტრუქტორის გამოყენებით სადაც იქნებიან სხვადასხვა ცხოველები და ყველას ასევე ექნება საკუთარი ასაკი
function Animal(name, age){
    this.name = name;
    this.nage = age;

}
animal1 = new Animal("dog", 5);

animal2 = new Animal("cat" , 10);

console.log(animal1);
console.log(animal2);
