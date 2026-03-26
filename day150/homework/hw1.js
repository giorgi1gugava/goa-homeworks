/*შექმენი კლასი User, რომელსაც ექნება:

name, age
მეთოდი changeName(newName) --> შეცვლის სახელს
მეთოდი increaseAge() ---> გაზრდის ასაკს თქვენთვის სასურველი რიცხვით

გამოიძახეთ ორივე ფუნქცია და ამის შემდეგ დააკონსოლლოგეთ მთლიანი ობიექტი*/

class User{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    changeName(newName){
        
        this.name = newName
        console.log("name " + this.name);

    }
    increaseAge(newAge){
        this.age = newAge
        console.log("age " + this.age);
    }

};

const user = new User("gio", 20);

user.changeName("jemal");
user.increaseAge(21);
