/*იპოვე პირველი თანამშრომელი, რომლის ანაზღაურება > 1500.

დაბეჭდე მისი სახელი და ანაზღაურება.
*/

const employees = [
    { name: "მარიამი", age: 25, department: "IT", salary: 1200 },
    { name: "გიორგი", age: 30, department: "HR", salary: 900 },
    { name: "ანა", age: 22, department: "IT", salary: 1000 },
    { name: "ლაშა", age: 28, department: "Finance", salary: 1500 },
    { name: "ნინო", age: 35, department: "IT", salary: 2000 }
];


let newEmp = employees.filter(function(namee){
    if(namee.salary > 1500){
        return namee.name && namee.salary
    }
});

console.log(newEmp);