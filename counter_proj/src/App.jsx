import { useState } from 'react' //hook idhar hai 
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  //use karise krna hai hook
  let [counter,setCounter]= useState(15) // 2 values dega, counter aur setcounter, and counter ko update karega 
  //jaha bhi counter aaega ussko update krdega 
  //then call setCounter as a func
  //let counter = 5

  const addValue = () => {
    console.log(counter)
    if(counter < 20) counter = counter + 1
    else if (counter = 20) counter = 20
    setCounter(counter)
  }
  const removeValue = () =>{
    console.log(counter)
    if(counter > 0) counter = counter - 1
    else if (counter = 0) counter = 0
    setCounter(counter)
  }
  const resetValue = () =>{
    console.log(counter)
    counter = 10
    setCounter(counter)
  }
  return (
    <>
      <h1>LMAO GNG</h1>
      <h2>Counter Value :{counter}</h2>

      <button
      onClick={addValue}>Add</button>  
      <br />
      <button
      onClick={removeValue}>Remove</button>
      <br />
      <button
      onClick={resetValue}>Reset</button>
    </>
  )
}

export default App
