/*)შექმენი კლასი Password

ქონდეს მნიშვნელობა --> value


მეთოდები:
changePassword(newPass)
checkPassword() --> გამოაქვს შეცვლილი პაროლი*/

class Password{
    constructor(value){
        this.value = value
    }
    changePassword(newPass){
        this.value = newPass

    }
    checkPassword(){
        console.log("this is password: " + this.value);

    }

    
};

const newPassword = new Password(111);

newPassword.changePassword(222);
newPassword.checkPassword();