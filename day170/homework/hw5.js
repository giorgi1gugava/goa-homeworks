/*შექმენი ცვლადი:

const age = 20;

თუ ასაკი 18 ან მეტია — resolve("Access granted"),
წინააღმდეგ შემთხვევაში — reject("Access denied").*/


const age = 20;

function fun() {
    return new Promise(function (res, rej) {
        if (age >= 18) {
            res("Access granted");
        } else {
            rej("Access denied");
        }
    });
}

fun()
    .then(function (access) {
        console.log(access);
    })
    
