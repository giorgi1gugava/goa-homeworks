const time = document.getElementById("clock");

let date = new Date();

time.textContent = date;

function changeTime(){
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    if (hr < 10){
        hr = `0${hr}`;
    }
    if (min < 10){
        min = `0${min}`;
    }
    if (sec < 10){
        sec = `0${sec}`;
    }
    time.textContent = `${hr}:${min}:${sec}`;

}
setInterval(changeTime, 1000);