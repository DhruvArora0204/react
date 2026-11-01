import React from "react"
import Cards from "./components/Cards"

function App() {
  let obj = {
    user : "name",
    age : 21
  }
  let newArr = [1,2,3]
  return (
  <>
    <h1 className="bg-green-400 rounded-lg text-center "> Tailwind practise</h1>
    <Cards channel = "Practicing props" someArr = {newArr} someobj = {obj} /> //ek components se doosare component mein vali bhejna 
  </>
  )
}

export default App
