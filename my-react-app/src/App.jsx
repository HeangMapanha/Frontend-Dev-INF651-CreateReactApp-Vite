import { useState, useRef } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)
  const inputRef = useRef(null)
  function updateNum() {
    setCount((prev) => prev + 1)
    // setCount((prev) => prev + 1)
    // setCount((prev) => prev + 1)

  } 

  function CheckNum() {
    console.log(inputRef.current.value)
  }
  
  return (
    <div>
      <p>{count}</p>
      <button onClick={updateNum}>CLICK ME</button>
      <input ref={inputRef} onChange={CheckNum}/>
    </div>
  )

}

export default App
