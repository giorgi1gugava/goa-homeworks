import React from 'react'

function Card(props) {
    
  return (
    <div>
        <h1>{props.title}</h1>
        <img width={400} src={props.imgSrc}></img>
        <p>{props.desc}</p>

    </div>
  )
}

export default Card