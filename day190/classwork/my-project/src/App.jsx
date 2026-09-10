import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  let name = "Gio";
  let surname = "gugava";
  let age = 18;

  return (
    <div>
      <h1>
        Hello my name is {name}, my surname is {surname} and I am {age} years old
      </h1>
    </div>
  );
}

export default App
