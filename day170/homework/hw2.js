/*Promise-მა დააბრუნოს "JavaScript", ხოლო then-ში დაუმატე " is awesome" და დაბეჭდე.*/


function fun(){
    return new Promise(function(res,rej){
        res("javascript");
    });
}

fun()
.then(function(word){
    console.log(word + " is awesome")
});