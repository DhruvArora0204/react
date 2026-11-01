import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    // Password generation logic here
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+~`|}{[]:;?><,./-="

    for(i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += strcharAt(char)
    }

    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword]) 

  return (
    <>
    <div className = "w-full max-w-md mx-auto shadow-md rounded-lg my-4 px-4 py-4  text-orange-100 text-center bg-gray-800" >
        <h1 className = "text-white text-center mb -4">
          Password Generator</h1>
      <div className = "flex shadow rounded-lg overflow-hidden mb-4 bg-yellow-100">
        <input 
        type = "text"
        value ={password}
        className ="outline-none w-full py-1 px-3 text-black"
        placeholder = "Password"
        readOnly
        />
        <button className = "bg-yellow-400 px-3 py-1 text-black font-semibold hover:bg-yellow-500 transition-colors duration-300">
          copy
        </button>
      </div>
      <div className = "flex text-sm gap-x-2">
        <div className = "flex item-center gap-x-1">
          <input
          type = "range"
          min = {6}
          max = {50}
          value = {length}
          className = "cursor-pointer"
          onChange = {(e) => setLength(e.target.value)}
          />
          <label >Length : {length}</label>
        </div>
        <div className = "flex item-center gap-x-1">
          <input
          type = "checkbox"
          id = "numberInput"
          checked = {numAllowed}
          onChange = {(e) => setNumAllowed((prev)=> !prev)} // reverse the value of numAllowed
          />
          <label >Numbers</label> 
        </div>
          <div className = "flex item-center gap-x-1">
          <input
          type = "checkbox"
          id = "characterInput"
          checked = {charAllowed}
          onChange = {(e) => setCharAllowed((prev)=> !prev)} // reverse the value of charAllowed
          />
          <label >Characters</label> 
        </div>
      </div>
        
    </div>
    </>
  )
}

export default App
