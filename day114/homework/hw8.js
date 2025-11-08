//შექმენი ობიექტი fruit, რომელსაც ექნება "name", "color", "taste", "size".ყველას მიანიჭე სტრინგი.for...in ციკლით გამოიტანე მხოლოდ ის value-ები, რომლებიც იწყება ასო "a"-ზე.


let fruit = {
    "name": "apple",
    "color": "amber",
    "taste": "sweet",
    "size": "average"
    
}



for (let key in fruit) {
    if (fruit[key].startsWith("a")) {

        console.log(`${key}: ${fruit[key]}`);
    }

}
