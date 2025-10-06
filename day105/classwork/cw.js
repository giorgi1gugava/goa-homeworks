//1მომხმარებელს შემოატანინეთ რიცხვი,1 იდან მომხმარებლის მიერ შემოტანილ რიცხვამდე დაატრიალეთ ლუპი და ჩაამატეთ ეს როცხვები სიაშ,შემდეგ ამ სიიდან დაბეჭდეთ მხოლოდ ლუწი რიცხვები.


let num = prompt("enter num:");
let list = [];
let i = 1;

while (i <= num){
    list.push(i);
    i += 1;
}

for (let number of list){
    if (number % 2 ===0 ){
        console.log(number)
    }
    
}