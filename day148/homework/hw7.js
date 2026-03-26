/*იპოვე პირველი თანამშრომელი, რომელიც მუშაობს Finance დეპარტამენტში და ასაკი > 25.

დაბეჭდე ინდექსი.
*/


const employees = [
    { name: "მარიამი", age: 25, department: "IT", salary: 1200 },
    { name: "გიორგი", age: 30, department: "HR", salary: 900 },
    { name: "ანა", age: 22, department: "IT", salary: 1000 },
    { name: "ლაშა", age: 28, department: "Finance", salary: 1500 },
    { name: "ნინო", age: 35, department: "IT", salary: 2000 }
];


let index = employees.findIndex(neww => neww.department === "Finance" && neww.age > 25);

console.log(index);
console.log(employees[index]);