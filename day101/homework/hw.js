//მომხმარებელს შემოატანინე რაიმე რიცხვი,1 დან მომხმარებლის შემოტანილ რიცხვამდე დათვალე თუ რამდენი ლუწი და რამდენი კენტი რიცხვია

let number = parseInt(prompt("შეიყვანეთ რიცხვი:"));

let evenCount = 0;
let oddCount = 0;


for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
        evenCount += 1;
    } else {
        oddCount += 1;
    }
}


console.log("ლუწი", evenCount);
console.log("კენტი", oddCount);
