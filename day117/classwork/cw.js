//1)შექმენით ერთი დივი,მიეცით ზომები 150px სიგანე 300px სიმაღლე/მიეცით წითელი ბორდერი ამ დივში ჩააშენეთ 1 ფოტო(ინტერნეტშ მოძებნეთ ნებისმიერი ფოტო) ამ დივშ ფოტოს ქვემოთ ჩააშენეთ 1 სათაური , ამ სათაურს ქონდეს class --> "heading" და css ში გასტილეთ სათაურის ქვემოთ ჩააშენეთ 1 პარაგრაფი რომელსაც კლასი ექნება paragraph და css იდან გასტილეთ და ამ სათაურის ქვევით იყოს button რომელსაც გასტილავთ css იდან

let div = document.getElementsByTagName("div");

div[0].innerHTML = "<img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5GtEzwYx1IDc5zyR7z-dl9PwPFr0yNcD8og&s'> <h1 class='heading'>satauri</h1> <button>button</button> <p class='paragraph'>hello<p>"