import React from 'react'

function User(props) {
    //შექმენი User კომპონენტი, რომელსაც name გადაეცემა props-ით. გამოიტანე ეკრანზე: Hello, Giorgi!

  return (
    <div>
        <p>hello {props.name}</p>
        
    </div>
  )
}

export default User