//გვერდზე იყოს ორი <p>. JS-ით გაცვალე ერთმანეთის textContent-ები(პირველის ტექსტი გახდეს მეორის და პირიქით).

let p = document.getElementsByTagName("p");

let fir = p[0].textContent
p[0].textContent = p[1].textContent
p[1].textContent = fir
