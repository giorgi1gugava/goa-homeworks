import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const username = "Goga";
  const age = 17;
  const isPremium = true;
  const movieName = "Inception";
  const imageUrl = "https://example.com/movie.jpg";
  const likes = 125;

  let accessMessage;
  

  if (age >= 18) {
    accessMessage = "You can watch this movie.";
  }else {
    accessMessage = "You are too young to watch this movie.";
  }

  let prem = isPremium ? "Premium User ⭐" : "Free User";
let acc = "You have access to exclusive movies! 🎥";

return (
  <div>
    <h1>welcome {username}</h1>

    <p>age: {age}</p>
    <p>name: {movieName}</p>
    <img src={imageUrl} />
    <p>likes: {likes * 2}</p>
    <p>{accessMessage}</p>

    <p>{prem}</p>

    {isPremium && <p>{acc}</p>}
  </div>
)
    
}

export default App
