//შექმენი ობიექტი student, რომელსაც ექნება "firstName", "lastName" და ფუნქცია სახელად getFullName(),რომელიც დააბრუნებს შემდეგნაირ ტექსტს --> `ჩემი სახელია ... და ჩემი გვარია ...` ,გამოიყენე this keyword ი`  ,გამოიძახეთ ფუნქცია რომ ნახოთ შედეგი


let student = {
    firstName: "gio",
    lastName: "gugava",
    FullName: function() {
        return `ჩემი სახელია ${this.firstName} და ჩემი გვარია ${this.lastName}`;
    }
};

console.log(student.FullName());
