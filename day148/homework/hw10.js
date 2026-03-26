/*მოცემულია მასივი:

const numbers = [5, 10, 15, 20];

გამოიყენე reduce, რათა გამოითვალოს ყველა რიცხვის ჯამი.

დაბეჭდე შედეგი.
*/


const numbers = [5, 10, 15, 20];

let neww = numbers.reduce((f,i) => {
    return f + i
}, 0);

console.log(neww);