//შექმენი ობიექტი ავტომობილის შესახებ ,გქონდეს year , model , milage , color , შენი დავალებაა რომ შექმნა სია ვალუებისა,შემდეგ გადაუარო ამ სიას და გმაოიტანო ცალ ცალკე თითოეული value გამოიყენე for of


let car = {
    year: 2015,
    model: "c300",
    milage: 45000,
    color: "silver"
}


let values = Object.values(car);
  
for (let value of values) {
    console.log(value);
}
  