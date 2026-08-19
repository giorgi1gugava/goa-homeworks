import React from 'react'

function Card(props) {
    //შექმენი Card კომპონენტი, რომელსაც გადაეცემა title, description და buttonText. გამოიყენე ეს კომპონენტი მინიმუმ 3-ჯერ სხვადასხვა მონაცემებით.
  return (
    <div>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
        <button>{props.buttonText}</button>
    </div>
  )
}

export default Card