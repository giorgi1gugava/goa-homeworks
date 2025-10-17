//დაწერე ფუნქცია, რომელიც იღებს სტუდენტების სახელების სიას და აბრუნებს(ითვლის) რამდენი სახელი იწყება ასო „გ“-ზე.

function f(names) {
    let sum = 0;

    for (let i = 0; i < names.length; i++) {
        if (names[i][0] === "გ") {
            sum += 1;
        }
    }

    console.log(sum);
}
