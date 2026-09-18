import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const games = [
    { id: 1, name: "Minecraft", genre: "Adventure", hours: 120 },
    { id: 2, name: "FIFA", genre: "Sports", hours: 45 },
    { id: 3, name: "GTA V", genre: "Action", hours: 200 },
    { id: 4, name: "The Sims", genre: "Simulation", hours: 30 }
  ];

  let card = games.map((info => <div className='card'><p>name:{info.name} <br /> genre:{info.genre} <p>{info.genre == "Action" ? "სათავგადასავლო მოქმედება" : ""}</p><br /> hours:{info.hours}</p><p>{info.hours > 100 ? "ბევრი დროა!" : ""}</p></div>));


  const books = [
    { id: 1, title: "Harry Potter", pages: 350, author: "J.K. Rowling" },
    { id: 2, title: "The Hobbit", pages: 280, author: "Tolkien" },
    { id: 3, title: "Dune", pages: 600, author: "Frank Herbert" },
    { id: 4, title: "Animal Farm", pages: 120, author: "George Orwell" }
  ];

  let book = books.map((bookInfo => <div>
    <br />
    <p>name:{bookInfo.title}</p>

    <p>{bookInfo.pages}</p>

    <p>{bookInfo.author}</p>
    <p>{bookInfo.pages > 300 ? "სქელი წიგნი" : bookInfo.pages < 200 ? "მოკლე წიგნი" : "საშუალო ზომის წიგნი"}</p>
    <br />
  </div>));


  const destinations = [
    { id: 1, city: "Paris", country: "France", days: 5, price: 1200 },
    { id: 2, city: "Rome", country: "Italy", days: 3, price: 800 },
    { id: 3, city: "Tokyo", country: "Japan", days: 10, price: 2500 },
    { id: 4, city: "Tbilisi", country: "Georgia", days: 4, price: 400 }
  ];

  let location = destinations.map((destination) => (<div key={destination.id}>
      <h2>{destination.city}</h2>
      <p>Country: {destination.country}</p>
      <p>Days: {destination.days}</p>
      <p>Price: ${destination.price}</p>
      <p>{destination.days > 7? "ხანგრძლივი მოგზაურობა": ""}</p>

          <p>{destination.price < 1000 ? "ბიუჯეტური მოგზაურობა" : ""} </p>
    </div>
  ))

  return (
    <>
      <h1>1</h1>
      <div >
        {card}

      </div>
      <h1>2</h1>
      <div>
        {book}
      </div>
      <h1>3</h1>
      <div>{location}</div>

    </>
  )
}

export default App
