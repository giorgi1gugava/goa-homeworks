const form = document.getElementById("form");
const input = document.getElementById("inp");
const main = document.getElementById("main");

async function getMovie(fileName) {
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${fileName}`);
        const data = await response.json();

        const movie = data[0].show;

        main.innerHTML = `<h2>${movie.name}</h2><img src="${movie.image.medium}" >`;
    } catch (error){

        console.log(error);
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    getMovie(input.value)
});