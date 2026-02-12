
let globalVar = "გლობალური";


if (true) {
    let ifVar = "if ბლოკის ცვლადი"; // block-scoped
}

for (let i = 0; i < 1; i++) {
    let forVar = "for ციკლის ცვლადი"; // block-scoped
}


console.log(globalVar); // მუშაობს
console.log(ifVar);     // error, block-scoped, ბლოკის გარეთ არ ჩანს
console.log(forVar);    // error, block-scoped, ბლოკის გარეთ არ ჩანს



