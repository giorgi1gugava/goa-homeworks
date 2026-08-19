import React from 'react'

function User1(props) {
    //შექმენი User კომპონენტი, რომელსაც გადაეცემა name და isOnline. თუ isOnline არის true, გამოიტანე Online, ხოლო თუ false — Offline.
  return (
    <div>
        <p>{props.name}</p>
        <p>{props.isOnline == "isOnline" ? props.isOnline: "offline"}</p>
    </div>
  )
}

export default User1