/*შექმენი კლასი BankAccount, რომელსაც ექნება:

owner, balance
მეთოდი deposit(amount) --> შეგვაქვს თანხა ანგარიშზე და ბეჭდავს განახლებულ ბალანსს
მეთოდი withdraw(amount) --> გაგვაქვს თანხა ანგარიშიდან და ბეჭდავს დარჩენილ თანხას ანგარიშზე

დააკონსოლლოგეთ ბოლოს მთლიანი ობიექტი რომ ნახოთ შეცვლილი ობიექტი*/


class BankAccount{
    constructor(owner,balance){
        this.owner = owner
        this.balance = balance
    }
    deposit(){
        let monay = Number(prompt("enter monay:"));
        this.balance += monay
        console.log("balance " + this.balance);

    }
    withdraw(){
        let minus = Number(prompt("enter monay:"));
        this.balance -= minus
        console.log("monay left:" + this.balance);
    }

};

const newBalance = new BankAccount("jemala",10);

newBalance.deposit();
newBalance.withdraw();