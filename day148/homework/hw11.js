/*მოცემულია მასივი პროდუქტების ობიექტებით:

const products = [
    { name: "ვაშლი", price: 2 },
    { name: "ბანანი", price: 3 },
    { name: "სტაფილო", price: 1 }
];

გამოიყენე reduce, რათა გამოითვალოს პროდუქტების საერთო ფასი.

დაბეჭდე შედეგი.*/

const products = [
    { name: "ვაშლი", price: 2 },
    { name: "ბანანი", price: 3 },
    { name: "სტაფილო", price: 1 }
];

let sum = products.reduce((st,end)=> {
    return st + end.price
}, 0);

console.log(sum);