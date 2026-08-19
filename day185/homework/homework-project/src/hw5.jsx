import React from 'react'

function Student(props) {
    //შექმენი Student კომპონენტი, რომელსაც გადაეცემა name, age და course. ეკრანზე გამოიტანე ყველა ინფორმაცია.
  return (
    <div>
        <p>{props.name}</p>
        <p>{props.age}</p>
        <p>{props.course}</p>
    </div>
  )
}

export default Student