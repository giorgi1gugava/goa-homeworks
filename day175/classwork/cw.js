/*შექმენით ფუნქცია რომელიც დააბრუნებს რაიმე ავტომობილის სახელს 2 წამში

შენი დავალებაა რომ ეს დარესოლვებული მნშვნელობა გამოიტანო კონსოლში

გამოიყენე async await ქივორდები .then ის მაგივრად*/



function carName() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("C63");
            
        }, 2000);
    });
}

async function show() {
    const ans = await carName();
    console.log(ans);
}

show();