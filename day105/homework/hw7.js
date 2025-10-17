//დაწერე ფუნქცია, რომელიც იღებს სახელების სიას და აბრუნებს ახალ სიას მხოლოდ იმ სახელებისგან შემდგარს, რომლებსაც სიგრძე 5-ზე მეტია და არის ლუწი.შემდეგ შეამოწმეთამ ახალ სიაში მყოფი სახელებიდან თუ რომელიმე იწყება ასო "ა" ზე ასეთი ელემენტები ამოშალეთ სიიდან(ამაში გამოიყენეთ splice ფუნქცია,თუ მიხვდებით როგორ)

function filterNames(names) {
    let newList = [];

    for (let i = 0; i < names.length; i++) {
        let name = names[i];
        if (name.length > 5 && name.length % 2 === 0) {
            newList.push(name);
        }
    }

    for (let i = 0; i < newList.length; i++) {
        if (newList[i][0] === "ა") {
            newList.splice(i, 1);
            i -=1; 
        }
    }

    return newList;
}
