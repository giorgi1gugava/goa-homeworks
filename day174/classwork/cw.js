let form = document.getElementById("form");
let main = document.getElementById("main");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let fileName = e.target.name.value;

    fetchData(fileName);

    form.reset();
});

function fetchData(fileName) {
    fetch(`https://api.tvmaze.com/search/shows?q=${fileName}`)
        .then(response => response.json())
        .then(info => {
            main.innerHTML = `
                <div class="card">
                    <img src="${info[0].show.image.original}" id="film-img">
                    <div id="info">
                        <p id="year">${info[0].show.premiered}</p>
                        <p id="name">${info[0].show.name}</p>
                        <p id="genre">${info[0].show.genres.join(", ")}</p>
                        <p id="description">${info[0].show.summary}</p>
                    </div>
                </div>
            `;
        })
        .catch(error => {
            console.log(error);
        });
}