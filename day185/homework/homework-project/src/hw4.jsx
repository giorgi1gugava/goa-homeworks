import React from 'react'

function Product(props) {
    //შექმენი Product კომპონენტი, რომელსაც გადაეცემა name, price და image. ეკრანზე გამოიტანე პროდუქტის სახელი, ფასი და სურათი.
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.price}</p>
        <img width="300" src={props.image}/>
    </div>
  )
}

export default Product