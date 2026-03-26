/*შექმენი კლასი Calculator, რომელსაც ექნება მეთოდები:

add(a, b)
subtract(a, b)
multiply(a, b)
divide(a, b)*/



class Calculator{
    constructor(a,b){
        this.a = a
        this.b = b
    }
    add(a,b){
        console.log(a + b);
    }
    subtract(a,b){
        console.log(a - b)
    }
    multuply(a,b){
        console.log(a * b)
    }
    divide(a,b){
        console.log(a / b)
    }
    
};

const calculator = new Calculator();

calculator.add(6,1);
calculator.subtract(6,1);
calculator.multuply(6,1);
calculator.divide(6,1);

