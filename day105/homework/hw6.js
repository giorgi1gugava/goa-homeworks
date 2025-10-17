//შექმენი ფუნქცია, რომელიც იღებს რიცხვების სიას და აბრუნებს ახალ სიას მხოლოდ იმ რიცხვებისგან შემდგარს, რომლებიც ერთდროულად ლუწებიც არიან და 5-ის ჯერადებიც,შემდეგ ამ სიაში მყოფი კენტი რიცხვების ჯამი იპოვეთ.

function f(list) {
    let newList = [];
    let sum = 0;

    for (let i = 0; i < list.length; i++) {
        let num = list[i];

        if (num % 2 === 0 && num % 5 === 0) {
            newList.push(num);
        }
    }

    for (let i = 0; i < newList.length; i++) {
        if (newList[i] % 2 !== 0) {
            sum += newList[i];
        }
    }

    console.log("ახალი სია:", newList);
    console.log("კენტი რიცხვების ჯამი:", sum);
}
