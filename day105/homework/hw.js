//დაწერე ფუნქცია, რომელიც იღებს არგუმენტად რიცხვების სიას და ახალ სიაში ამატებს მხოლოდ ლუწ რიცხვებს. შემდეგ იპოვეთ ამ სიაში მყოფი რიცხვების ჯამი.

function sumEvenNumbers(numbers) {
    let even = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            even.push(numbers[i]);
        }
    }

    let sum = 0;
    for (let i = 0; i < even.length; i++) {
        sum += even[i];
    }

    return sum;
}
