function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}


const person1 = new Person("გიორგი", "ანთაძე", 25);
const person2 = new Person("ნინო", "მიქაძე", 30);
const person3 = new Person("ლუკა", "ბერიძე", 20);


console.log(person1);
console.log(person2);
console.log(person3);
