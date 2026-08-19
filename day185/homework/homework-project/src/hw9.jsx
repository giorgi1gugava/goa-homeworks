import React from 'react'
import './index.css'
function UserCard(props) {
    //შექმენი UserCard კომპონენტი, რომელსაც გადაეცემა name, age, job, city და isOnline. შექმენი ლამაზი მომხმარებლის ბარათი და ყველა ეს ინფორმაცია გამოიტანე. isOnline-ის მიხედვით აჩვენე მომხმარებელი Online არის თუ Offline
  return (
    <div className='box'>
        <h1>name: {props.name}</h1>
        <p>age: {props.age}</p>
        <p>job: {props.job}</p>
        <p>city: {props.city}</p>
        <p>{props.isOnline == "online" ? props.isOnline: "offline"}</p>
    </div>
  )
}

export default UserCard