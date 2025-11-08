//შექმენი ობიექტი student, რომელსაც ექნება "firstName", "lastName", "class", "id".ყველა იყოს სტრინგი.for...in ციკლით გამოიტანე მხოლოდ ის value-ები, რომელთა სიგრძე ტოლია 3-ის.

let student = {
    "firstName": "Gio",
    "lastName": "Lee",
    "class": "10A",
    "id": "123"
};

for (let key in student) {
    if (student[key].length === 3) {
        console.log(`${key}: ${student[key]}`);
    }
}
