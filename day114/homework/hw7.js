//შექმენი ობიექტი student, რომელსაც ექნება "age", "grade", "height", "score" ყველა მათგანს ვალუებად მიანიჭეთ მხოლოდ ნამბერ ტიპის მონაცემები.
//for...in ციკლით გადაუარე ამ ობიექტს და კონსოლში გამოიტანე მხოლოდ ის ვალუები რომელიც მეტია 50 ზე

let student = {
    "age": 18,
    "grade": 75,
    "height": 45,
    "score": 90
};

for (let key in student) {
    if (student[key] > 50) {
        console.log(`${key}: ${student[key]}`);
    }
}
