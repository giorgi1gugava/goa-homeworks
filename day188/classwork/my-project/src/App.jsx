
import { useState } from 'react'

import './App.css'

function App() {
  let [val,func] = useState(0);

  function plus(){
    func(val +1 );
    console.log(val)

  }

  function minus(){
    func(val - 1 )
    console.log(val)
  }
  

  return (
    <div>
      <button onClick={plus}>+</button>
      <p>{val}</p>
      <button onClick={minus}>-</button>
    </div>
  )
}

export default App
