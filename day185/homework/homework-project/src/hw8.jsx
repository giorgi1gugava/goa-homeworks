import React from 'react'


function Product1(props) {
    //შექმენი Product კომპონენტი, რომელსაც გადაეცემა name, price და category. შექმენი მინიმუმ 3 სხვადასხვა პროდუქტი და თითოეულს განსხვავებული ინფორმაცია გადაეცი.
  return (
    <div>
        <h1>name: {props.name}</h1>
        <p>price: {props.price}</p>
        <p>category: {props.category}</p>
    </div>
  )
}

export default Product1