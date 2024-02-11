import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './button'
function App() {
  
  let foodItems =['Dal','Vegetables','Chawal','Roti',9]
  
       return <div>
         <p>
        <h1 style={{'background-color':'red'}}>Poornima batham</h1>
          Edit <code>src/App.jsx</code> and save to test HMR

        </p>
        <h1>Healthy Foods</h1>
        <ul>{foodItems.map((item)=>(
          <li>{item}</li>))}
          </ul>
        <Button></Button>
        <Button/>


       </div>
       
      
}

export default App
