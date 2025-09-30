//ფუნქციამ მიიღოს ორი რიცხვი (start, end) და for loop-ით შეაჯამოს მხოლოდ კენტი რიცხვები.თუ ჯამი > 50 → "დიდი ჯამი" სხვაგვარად → "პატარა ჯამი".

function sum(start, end) {
    let sum = 0;
    for (let num = start; num <= end; num += 1) {
        if (num % 2 !== 0) {  
            sum += num;
        }
    }

    if (sum > 50) {
        console.log("დიდი ჯამი");
    } else {
        console.log("პატარა ჯამი");
    }
}

sum(1, 10);  
sum(10, 20); 
