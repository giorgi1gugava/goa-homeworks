/*იპოვე პირველი თანამშრომელი, რომელიც IT დეპარტამენტშია, ასაკი < 30, ანაზღაურება < 1500, სახელი იწყება “ა” ასოთი.

დაბეჭდე ინდექსი და ობიექტი.*/


const employees = [
    { name: "მარიამი", age: 25, department: "IT", salary: 1200 },
    { name: "გიორგი", age: 30, department: "HR", salary: 900 },
    { name: "ანა", age: 22, department: "IT", salary: 1000 },
    { name: "ლაშა", age: 28, department: "Finance", salary: 1500 },
    { name: "ნინო", age: 35, department: "IT", salary: 2000 }
];


let index = employees.findIndex(neww => neww.department === "IT" && neww.age < 30 && neww.salary < 1500 && neww.name[0] === "ა");

console.log(index);
console.log(employees[index]);