//ფუნქციამ მიიღოს პაროლი (პარამეტრი).

//while loop-ში მომხმარებელს (prompt) მოსთხოვოს პაროლი.

//სანამ შეყვანილი პაროლი არ დაემთხვევა სწორ პარამეტრს, მოსთხოვე თავიდან.

//თუ დაემთხვა → "წარმატებით!".


function func(correctPassword) {
    let password1 = Number(prompt("enter num:"));
    while (password1 !== correctPassword) {
        password1 = Number(prompt("enter num again:"));
    }
    alert("warmatebit!");
}

func(132);
