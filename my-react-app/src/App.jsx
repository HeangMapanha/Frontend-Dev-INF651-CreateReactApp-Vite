
import './App.css'

import Profile from '../components/Profile'
import { StateExample } from '../components/euseState'
import { RefExample } from '../components/euseRef'

function App() {
  const data = {
      name: "Alex Johnson",
      profession: "Frontend Developer",
      email: "alex.johnson@example.com",
      location: ["San Francisco", "CA"],
      skills: ["Javascript", "React", "HTML"]
    }  

  return (

    <RefExample/>

  )
}


export default App
