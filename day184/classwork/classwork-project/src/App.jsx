
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {


  let age = prompt("Enter your age:");
  let adult = "adult";
  let child = "child"

  

  return (
    <div>
    
      <p>{age > 18 ? adult : child}</p>
    
    </div>
    
  )
}

export default App