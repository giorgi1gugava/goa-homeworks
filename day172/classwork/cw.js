function fun1() {
    return Promise.resolve("Hello");
}

function fun2(data) {
    console.log(data);
    return "World";
}

function good(data) {
    console.log(data);
}

function bad(err) {
    console.log("Error:", err);
}

fun1()
    .then(fun2)
    .then(good)
    .catch(bad);