//შექმენი ფუნქცია რომელიც იღებს სტრინგების სიას,შენი დავალებაა რომ შეამოწმო,თუ რომელიმე სტრინგის სიგრძე არის ლუწი რიცხვისგან შემდგარი მაშინ ასეთი სახელები ჩაამატეთ ახალ სიაში,ხოლო თუ რომელიმე სტრინგის სიგრძე არის კენტი რიცხვისგან შემდგარი ასეთი სტრინგები შეცვალე false მნიშვნელობით.

function processStrings(strings) {
    let result = [];

    for (let i = 0; i < strings.length; i++) {
        if (strings[i].length % 2 === 0) {
            result.push(strings[i]);
        } else {
            result.push(false); 
        }
    }

    console.log(result);
}
