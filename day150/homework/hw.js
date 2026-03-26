/*შექმენი კლასი Car, რომელსაც ექნება:

properties: brand, model, year
მეთოდი getInfo(), რომელიც აბრუნებს სტრინგს მანქანის შესახებ*/

class Car{
    constructor(brand,model,year){
        this.brand = brand
        this.model = model
        this.year = year
    }

    getInfo(){
        console.log("this" + this.brand + "is " + this.model + " ,year: " + this.year);
    }
}

const car = new Car("toyota", "supra", 1997);

car.getInfo();