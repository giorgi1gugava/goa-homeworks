import { useState } from 'react'

import Greeting from './hw'
import UserCard from './hw1'
import Product from './hw2'
import ProductCard from './hw3'
import Footer from './hw4-footer'
import Header from './hw4-header'
import HeaderSecond from './hw5-header'
import Main from "./hw5-main"
import FooterSecond from './hw5-footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>1</h1>
      <Greeting />
      <h1>2</h1>
      <UserCard />
      <h1>3</h1>
      <Product />
      <h1>4</h1>
      <ProductCard />
      <h1>5</h1>
      <Header />
      <Footer />
      <h1>6</h1>
      <HeaderSecond />
      <Main />
      <FooterSecond />


    </>
  )
}

export default App
