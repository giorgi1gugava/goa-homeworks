
import User from "./hw.jsx"
import Person from "./hw1.jsx"
import Button from './hw2.jsx'
import Box from "./hw3.jsx"
import Product from "./hw4.jsx"

import Student from './hw5.jsx'
import Card from "./hw6.jsx"
import User1 from "./hw7.jsx"
import Product1 from "./hw8.jsx"
import UserCard from "./hw9.jsx"



function App() {
 

  return (
    <div>
    <User name="giorgi"/>

    <Person name="giorgi" age={21}/>


    <Button text="Login" />
    <Button text="Regiter"/>
    <Button text="Click me"/>



    <Box color="red"/>
    <Box color="gray"/>



    <Product image="https://s3.zoommer.ge/site/c3ba5380-c896-4e99-b5ea-19bd3315fcb9_Thumb.jpeg" name="iphone 15" price="2100" />



    <Student name="luka" age="18" course="css"/>


    <Card title="toyota supra" desc="this is fast car" buttonText="learn more"/>
    <Card title="nissan xtera" desc="this car is for offroad" buttonText="see details"/>
    <Card title="iphone 17" desc="this is a new iphone" buttonText="buy"/>


    <User1 name="giorgi" isOnline="isOnline"/>


    <Product1 name="iphone 15" price="2100" category="phone"/>
    <Product1 name="apple mackbook" price="2500" category="laptop"/>
    <Product1 name="samsung tv" price="1300" category="TV"/>


    <UserCard name="nika" age="30" job="frontent developer" city="tbilisi" isOnline="online"/>




    </div>
  )
}

export default App
