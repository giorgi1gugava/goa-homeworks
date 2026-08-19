import React from 'react'

function Button(props) {
    //შექმენი Button კომპონენტი, რომელსაც text გადაეცემა props-ით. გამოიყენე კომპონენტი რამდენჯერმე სხვადასხვა ტექსტით, მაგალითად: Login, Register, Click me.
  return (
    <div>
        <button>{props.text}</button>
    </div>
  )
}

export default Button