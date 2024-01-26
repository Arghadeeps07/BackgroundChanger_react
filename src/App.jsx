import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [color, setColour] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" 
    style ={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center inset-x-0 px-2 bottom-14">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl">
          <button
          onClick={()=> setColour("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{backgroundColor: "red"}}>
            Red
          </button>
          <button
          onClick={()=> setColour("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{backgroundColor: "green"}}>
            Green
          </button>
          <button
          onClick={()=> setColour("black")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{backgroundColor: "black"}}>
            Black
          </button>
          <button
          onClick={()=> setColour("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{backgroundColor: "blue"}}>
            Blue
          </button>
          <button
          onClick={()=> setColour("olive")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{backgroundColor: "olive"}}>
            Olive
          </button>
        </div>

      </div>

    </div>
  )
}

export default App
