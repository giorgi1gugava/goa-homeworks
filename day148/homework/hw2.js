/*შექმენი მასივი სტატიის ობიექტებით:

const articles = [
    { id: 1, content: "Learning JavaScript is fun" },
    { id: 2, content: "CSS animations are cool" },
    { id: 3, content: "Advanced JavaScript techniques" },
    { id: 4, content: "HTML basics" }
];

გამოიყენე filter, რათა გამოყო მხოლოდ ის სტატია, რომელიც შეიცავს სიტყვას "JavaScript".

სიტყვა არ არის case-sensitive.*/

const articles = [
    { id: 1, content: "Learning JavaScript is fun" },
    { id: 2, content: "CSS animations are cool" },
    { id: 3, content: "Advanced JavaScript techniques" },
    { id: 4, content: "HTML basics" }
];


let newArt = articles.filter(name => name.content.includes("JavaScript"));

console.log(newArt);