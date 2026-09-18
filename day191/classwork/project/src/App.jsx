import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  
  /*1)შექმენი სია სადაც იქნება ოთხი ობიექტი,თითეულ ობიექტში უნდა იყოს name surname და age კუთვნილებები

შენი დავალებაა map ით გადაიარო ამ სიაზე და ul ში დაარენდერო li სადაც იქნება თითოეული ობიექტის ყველა კუთვნილება სახელიც გვარიც და ასაკიც*/

let list = [{ name: "saba", surname: "iremashvili", age: 19 }, { name: "Luka", surname: "Kapanadze", age: 17 }, { name: "lika", surname: "Gelashvili", age: 30 },{ name: "gio", surname: "jeiranashvili", age: 19 }];

let output = list.map((info => <li>{info.name + " "+info.surname+" " + info.age}</li>))



  return (
    <>
      
           <ul>{output}</ul>
                
    </>
  )
}

export default App
