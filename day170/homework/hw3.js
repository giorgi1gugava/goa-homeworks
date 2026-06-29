/*შექმენი Promise, რომელიც reject-ს იძახებს ტექსტით "Something went wrong".*/


function rej(){
    return new Promise(function(resolve,reject){
        reject("something went wrong");
    });
}


rej().then(function(wrong){
    console.log(wrong);
})