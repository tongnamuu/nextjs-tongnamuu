import { useState } from "react"

export default function Home() {
  const[counter, setCounter] = useState(0) 
  return (
    <div>
      <h1>Tongnamuu {counter}</h1>
      <button onClick={() => setCounter(prev => prev + 1)}> Increase</button>
    </div>
  )
}
