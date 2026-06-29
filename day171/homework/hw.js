let h1City = document.getElementById("city-name");
let temperature  = document.getElementById("temterature");
let weather = document.getElementById("weather");
let form = document.getElementById("form");
let wind = document.getElementById("wind-p");
let tempC = document.getElementById("temp");
let tempF = document.getElementById("tempF");
let country = document.getElementById("country");
let cloud = document.getElementById("cloud-p");
let time = document.getElementById("info-p");
let icon = document.getElementById("cloud");




function weatherapi(city){
    return new Promise((res,rej)=>{
    let http = new XMLHttpRequest();
   

    http.onreadystatechange = function(){
        if(this.readyState === 4){
            if(this.status == 200){
                let response = JSON.parse(this.responseText);
                res(response);
            } else{
                rej("not found!");
            }
            
                   
    } 
    }



    let api = `https://api.weatherapi.com/v1/current.json?key=c8ced2d4f4a741e597a174639260106&q=${city}&aqi=no`
    http.open("GET", api);
    http.send();
    });
}



form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let city = e.target.city.value;

    weatherapi(city).then((response)=>{
        
        h1City.textContent =  response.location.name;
        temperature.textContent = response.current.temp_c;
        weather.textContent = response.current.condition.text;
        wind.textContent = response.current.wind_mph;
        tempC.textContent = response.current.temp_c;
        tempF.textContent = response.current.temp_f;
        country.textContent = response.location.name;
        cloud.textContent = response.current.cloud;
        time.textContent = response.location.localtime;
            if(response.current.condition.text == "Clear"){

                document.body.style.backgroundImage =
                "url(https://clarksvillenow.com/wp-content/blogs.dir/43/files/2020/10/shutterstock_206307496-1200x768.jpg)";

                icon.src = "./clear.png";
                
            }if(response.current.condition.text == "Mist"){

                document.body.style.backgroundImage =
                "url(https://met.caa.gov.om/wp-content/uploads/2025/06/Copilot_20250622_124631_11zon-1-1024x683.jpg)";

               
                icon.src = "./fog.png";

            }if(response.current.condition.text == "Patchy rain nearby"){

                document.body.style.backgroundImage =
                "url(https://www.weatherwizkids.com/wp-content/uploads/2015/02/rain21.jpg)";

                icon.src = "./rain.png";
            }



    }).catch((reje)=>{
        console.log(reje);
    })
})



