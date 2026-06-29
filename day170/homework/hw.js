/*შექმენი Promise, რომელიც აბრუნებს "Hello World"-ს resolve-ით და დაბეჭდე შედეგი then-ის საშუალებით.*/

function fun(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve("hello world");
        })
    });
}


fun()
.then(function(i){
    console.log(i)
})