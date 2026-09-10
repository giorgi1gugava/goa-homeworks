import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './hw.jsx'
import Hw1 from './hw1.jsx'
import Hw2 from './hw2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <p>------------------------------------------------------------------</p>
    <Hw1 />
    <p>------------------------------------------------------------------</p>
    <Hw2 />
  </StrictMode>,
)
