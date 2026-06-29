/*შექმენი Promise, რომელიც resolve-ით აბრუნებს რიცხვს 10 და then-ში დაბეჭდე.*/

function fun(){
    return new Promise(function(res,rej){
        res(10);
    });
}


fun().then(function(num){
    console.log(num)
})
