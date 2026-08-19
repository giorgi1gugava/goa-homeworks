import React from "react";

function Person(props) {
    //შექმენი Person კომპონენტი, რომელსაც გადაეცემა name და age. გამოიტანე: Giorgi is 21 years old.
  return (
    <div>
      <p>{props.name} is {props.age} years old</p>
    </div>
  );
}

export default Person;