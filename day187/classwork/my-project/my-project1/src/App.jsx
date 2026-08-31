import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import picture from "./assets/shopping-cart.png";
function App() {
  

  return (
    <div class="flex flex-row mt-20  bg-white rounded-2xl">
      <img class="rounded-tl-2xl rounded-bl-2xl"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi2DpQacRtS9PX6fMl_SwFG8UntNx5nMi71sbtRiHuYkCLHX5LpxmKMTfP&s=10"></img>
      <div class="flex flex-col p-8 gap-5">
        <p class="text-gray-500 tracking-widest text-xl">Perfume</p>
        <p class="text-5xl font-medium w-70">Gabrielle Essense Eau de parfum</p>
        <p class="w-70 text-xl text-gray-500">a floral, solar and voluptious interpretation composed by olivier polage perfum-creator for the house of Chanell.</p>
        <div class="flex flex-row items-center gap-10">
          <p class="text-green-400 text-4xl font-medium">$149.99</p>
          <p class="line-through text-gray-500">$169.99</p>
        </div>
        <button><div class="flex flex-row bg-green-400 px-12 rounded-2xl py-4 items-center gap-5">
          <img class="w-5 "src={picture}></img>
          <p class="text-white font-semibold">add to the cart</p>

        </div></button>
      </div>

    </div>
  )
}

export default App
