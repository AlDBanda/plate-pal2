import { useState } from 'react'
import PPlogo from "./assets/PPlogo.png";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-end w-full px-4 py-2">
        <button className="mx-2 px-4 py-2 bg-gray-500 text-white rounded-lg font-Sorts">
          Login
        </button>
        <button className="mx-2 px-4 py-2 bg-gray-500 text-white rounded-lg font-Sorts">
          Register
        </button>
      </div>
      <img src={PPlogo} alt="PPlogo" className="w-64 h-auto mt-4" />
    </div>
  )
}

export default App
