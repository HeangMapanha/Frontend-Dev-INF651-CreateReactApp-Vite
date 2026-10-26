import { useState, useRef } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import Profile from '../components/Profile'

function App() {
  // const [count, setCount] = useState(1)
  // const inputRef = useRef(null)
  // function updateNum() {
  //   setCount((prev) => prev + 1)
  //   // setCount((prev) => prev + 1)
  //   // setCount((prev) => prev + 1)

  // } 

  // function CheckNum() {
  //   console.log(inputRef.current.value)
  // }
  const data = {
      name: "Alex Johnson",
      profession: "Frontend Developer",
      email: "alex.johnson@example.com",
      location: ["San Francisco", "CA"],
      skills: ["Javascript", "React", "HTML"]
    }  

  return (
    // <div>
    //   <p>{count}</p>
    //   <button onClick={updateNum}>CLICK ME</button>
    //   <input ref={inputRef} onChange={CheckNum}/>
    // </div>
    
    <Profile props={data}/>

  )
}


export default App
