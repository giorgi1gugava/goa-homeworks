/*Promise-მა დააბრუნოს 5, ხოლო then-ში გააორმაგე და დაბეჭდე.

შედეგი:

10*/


function fun(){
    return new Promise(function(res,rej){
        res(5);
    });
}


fun().then(function(num){
    console.log(num * 2);
});
