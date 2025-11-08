//შექმენი ობიექტი car, რომელსაც ექნება "brand", "model" და "year".
//for...in ციკლით კონსოლში დაწერე:"brand: BMW" — მსგავსი ფორმატით (ანუ key: value). გამოიყენეთ სტრინგ ფორმატი(f string) რომ ვიყენებდით ხოლმე პითონში ეგრე რესურსებში ჩაგდებულია ბოლოს და შეამოწმეთ.


let car = {
    "brand": "BMW",
    "model": "M5",
    "year": 2020
};


for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}
