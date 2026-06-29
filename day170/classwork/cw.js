/*შექმენით ფუნქცია რომელიც ასინქრონულად დააბრუნებს მონაცემბს(მონაცემი იქნება ამინდის პროგნოზი), ამ ფუნქციას გადაეცემა callback რომელიც მიიღებს არგუმენტად ამინდის პროგნოზის მონაცემს და გამოსახავს შესაბამის რჩევას*/

let weather;



function weatherFunction(callback){
    setTimeout(()=>{
        weather = "sunny";
       callback(weather)
    } , 3000);
}

function advice(){
    if (weather == "sunny"){
        console.log("take sun glasses");
    }
}


weatherFunction(advice);

