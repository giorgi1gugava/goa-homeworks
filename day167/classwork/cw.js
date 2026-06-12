let h1City = document.getElementById("city-name");
let temperature  = document.getElementById("temterature");
let weather = document.getElementById("weather");
let form = document.getElementById("form");

function weatherapi(city){
    let http = new XMLHttpRequest();

    http.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            let response = JSON.parse(this.responseText);
            console.log(response);
            h1City.textContent =  response.location.name;
            temperature.textContent = response.current.temp_c;
            weather.textContent = response.current.condition.text;

            
        }
    }


    let api = `https://api.weatherapi.com/v1/current.json?key=c8ced2d4f4a741e597a174639260106&q=${city}&aqi=no`
    http.open("GET", api);
    http.send();
}



form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let city = e.target.city.value;
    console.log(city);
    weatherapi(city);
})