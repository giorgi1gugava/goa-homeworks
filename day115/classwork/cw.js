//1.მაქსიმუმი და მინიმუმი
//დაწერე კოდი რომელიც გამოიტანს 5 რიცხვის მაქსიმუმს
//და მინიმუმს 
//გამოიყენე Math.max() და Math.min()
console.log(Math.max(1,2,3,4,5))
console.log(Math.min(1,2,3,4,5))

//2.მომრგვალება
//გამოიყენე Math.round() math.ceil() Math.floor().
//შემდეგ რიცხვებზე 
//4.7, 9.1, -3.6.
console.log(Math.round(4.7))
console.log(Math.ceil(9.1))
console.log(Math.floor(-3.6))


//3.ხარისხში აყვანა
//გამოთვალე:
//3,5,2
//გამოიყენე Math.pow()
console.log(Math.pow(3, 4))
console.log(Math.pow(5, 2))
console.log(Math.pow(2, 1))


//4.კვადრატული ფესვი
//გამოთვალე კვადრატული ფესვი რიცხვების:
//25, 144, 2.
//შედეგები გაამრავლე Math.round -ით.
console.log(Math.sqrt(25,144,2))


//5.აბსოლიტური მნიშვნელობა
//გარდაქმენი უარყოფითი რიცხვები დადებითად:
//-8.3, 5, -12.
console.log(Math.abs(-8.3,5 ,-12))



//კომბინირებული გამოთვლა 
//დაწერე ფუნქცია calculate(num), რომელიც:
//1. აიყვანს num -ს მე2 ხარისხში
//2. ამოიღებს კვადრატულ ფესვს
//3. გაამრგვალებს ქვევით (Math.floor)
    //ტესტი:calculate(7.8)->7
function calculate(num){
    console.log(Math.pow(num , 2))
    console.log(Math.sqrt(num))
    console.log(Math.floor(num))
}
calculate()

