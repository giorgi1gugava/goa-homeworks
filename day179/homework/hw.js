let title = document.getElementById("title");
let img = document.getElementById("img");
let country = document.getElementById("country");
let category = document.getElementById("category")
let desc = document.getElementById("description");
let a = document.getElementById("youtube-a");
let inp = document.getElementById("inp");
let srch = document.getElementById("search-img");

async function info() {
    try {
        let res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        let data = await res.json();

        title.textContent = data.meals[0].strMeal;
        img.src = data.meals[0].strMealThumb;
        country.textContent = data.meals[0].strArea;
        desc.textContent = data.meals[0].strInstructions;
        category.textContent = data.meals[0].strCategory;
        a.href = data.meals[0].strYoutube;




        console.log(data)
    }

    catch (err) {
        console.log(err)

    }


}



info();



async function info2() {
    try {

        let value = inp.value;
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${value}`);
        let data = await res.json();

        let meal = data.meals[0];


        title.textContent = meal.strMeal;
        img.src = meal.strMealThumb;
        category.textContent = value;
        desc.textContent = meal.strInstructions;
        country.textContent = meal.strCountry;

    } catch (err) {
        console.log(err);
    }
}


srch.addEventListener("click", () => {
    info2();
});