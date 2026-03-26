/*შექმენი კლასი Product, რომელსაც ექნება:

name, price, quantity
მეთოდი getTotalPrice() → აბრუნებს მთლიან ფასს(ფასი გამრავლებული ოდენობაზე)*/

class Product{
    constructor(name,price,quality){
        this.name = name
        this.price = price
        this.quality = quality
    }
    getTotalPrice(){
        console.log(this.price * this.quality);
    }
};

const total = new Product("milk", 2, 5);

total.getTotalPrice();