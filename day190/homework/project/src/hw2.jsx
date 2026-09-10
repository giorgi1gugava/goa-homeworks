import React from 'react'

function Hw2() {

    const festivalName = "Tbilisi Music Fest";
    const city = "Tbilisi";
    const month = "September";
    const day = 18;

    const visitors = 8500;
    const capacity = 10000;

    const weather = "sunny";
    const temperature = 27;

    const isWeekend = true;
    const hasVipZone = true;
    const ageLimit = 16;

    const userAge = 18;

    const mainArtist = "Imagine Dragons";
    const startHour = 19;



    let festivalStatus;
    if (visitors >= 9000) {
        festivalStatus = "🔥 Almost Full";
    } else if (visitors >= 7000) {
        festivalStatus = "⚡ Getting Busy";
    } else {
        festivalStatus = " 🙂 Plenty of Space";

    }


    let weatherMessage;
    if (weather === "sunny") {
        weatherMessage = " ☀️ Perfect weather for the festival!"
    } else if (weather === "rainy") {
        weatherMessage = "🌧️ Don't forget your umbrella!"
    } else {
        weatherMessage = "Check the weather before leaving"
    }


    let ageMessage;
    if (userAge >= ageLimit) {
        ageMessage = "You can enter the festival."
    } else {
        ageMessage = "❌ You cannot enter the festival."
    }

    let entryType =
        userAge < ageLimit
            ? "🚫 Entry Denied"
            : hasVipZone
                ? "⭐ VIP Entry Available"
                : "🎫 Regular Entry";

    let finalMessage =
        userAge < ageLimit
            ? "🚫 You cannot attend this festival."
            : visitors >= capacity * 0.9
                ? "🔥 Hurry! The festival is almost full!"
                : weather === "sunny"
                ? "🎉 Everything is ready! Have fun!"
                : "i Check all festival information before entering.";


    return (
        <div>
            <h1>1</h1>
            <p>{festivalName}</p>
            <p>📍{city}</p>
            <p>📅{month + day}</p>
            <p>🎤{mainArtist}</p>
            <h1>2</h1>
            <p>festival start at{startHour}:00</p>
            <h1>3</h1>
            <p>Available places:{capacity - visitors}</p>
            <h1>4</h1>
            <p>{festivalStatus}</p>
            <h1>5</h1>
            <p>{weatherMessage}</p>
            <h1>6</h1>
            <p>{temperature >= 30 ? "🔥 Very Hot" : temperature >= 20 ? "😎 Comfortable Weather" : temperature >= 10 ? "🧥 A Little Cold" : "🥶 Very Cold"}</p>
            <h1>7</h1>
            {isWeekend && <p>🎉 Weekend Festival!</p>}
            <h1>8</h1>
            {hasVipZone && <p>⭐ VIP Zone is available</p>}
            <h1>9</h1>
            <p>{ageMessage}</p>
            <h1>10</h1>
            <p>{entryType}</p>
            <h1>11</h1>
            <p>{finalMessage}</p>



        </div>
    )
}

export default Hw2