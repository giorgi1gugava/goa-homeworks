//ფუნქციამ მიიღოს ორი რიცხვი (start, end) და while loop–ით გადაუაროს ამ დიაპაზონს.

//თითო რიცხვისთვის შეამოწმეთ if else-ით:

//თუ ლუწია → დაბეჭდოს "ლუწია"

//თუ კენტია → "კენტია". გამოიძახეთ ფუნქცია რომ ნახოთ შედეგი
function func(start, end) {
    let number = start;
    while (number <= end) {
        if (number % 2 === 0) {
            console.log(number + " ლუწია");
        } else {
            console.log(number + " კენტია");
        }
        number += 1;
    }
}


func(1, 10);
