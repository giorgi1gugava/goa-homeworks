/*შექმენი ცვლადი:

const number = 8;

თუ რიცხვი ლუწია — resolve("Even"),
თუ კენტია — reject("Odd").*/
function num(){
    const number = 8;
    return new Promise(function(res,rej){
        if(number % 2 == 0){
            res("Even");
        } else{
            rej("Odd");
        }
    });
}

num().then(function(answer){
    console.log(answer);
});
