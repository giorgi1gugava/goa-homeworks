/*შექმენი კლასი სახელად Bank რომელშიც გექნება მომხმარებლის სახელი, გვარი და მისი ბალანსი(თანხა რომელიც აქვს ანგარიშზე), ასევე რა რაოდენობის თანხის შეტანა სურს ექუნთზე, შექმენი კლასში მეთოდი რომლის მეშვეობით მომხმარებელი შეძლებს ბალანსზე თანხის შეტანას და დამატებას, შედეგი გამოიტანეთ კონსოლში*/


class Bank{
    constructor(name,saurname,balance){
        this.name = name
        this.saurname = saurname
        this.balance = balance
 

    }

    
    method() {
      let monay = prompt("enter monay:");
      this.balance += monay;
      
        console.log("monay:"+this.balance);
        
    }



}

const user1 = new Bank("gio", "gugava", 1000);
user1.method();