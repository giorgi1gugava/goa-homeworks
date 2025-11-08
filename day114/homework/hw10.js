//შექმენი ობიექტი book, რომელსაც ექნება "title", "author", "genre", "lang".ყველა მიანიჭე სტრინგი.for...in ციკლით გამოიტანე მხოლოდ ის value-ები, რომლებიც შეიცავენ ასო "o"-ს.
let book = {
    "title": "Odyssey",
    "author": "Homer",
    "genre": "poem",
    "lang": "greek"
};

for (let key in book) {
    if (book[key].includes("o")) {
        console.log(`${key}: ${book[key]}`);
    }
}
