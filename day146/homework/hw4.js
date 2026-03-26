/* მოცემულია ობიექტების მასივი. შექმენი ახალი მასივი მხოლოდ სახელებით. 
const users = [
  {name: "Nika", age: 20},
  {name: "Ana", age: 25},
  {name: "Gio", age: 17}
];*/


const users = [
    {name: "Nika", age: 20},
    {name: "Ana", age: 25},
    {name: "Gio", age: 17}
  ];

const neww = users.map(users => users.name);

console.log(neww);