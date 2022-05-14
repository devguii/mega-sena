import { useState } from "react"
import Numero from "../components/Numero"


export default function megaSena() {

  const [num, setNum] = useState(0)

  function sortear() {
    setNum(Math.floor(Math.random() * 68 + 1))
  }

  return (


    <div>
      <h1>Mega-Sena</h1>
      <Numero numero={num} />
      <Numero numero={num} />
      <Numero numero={num} />
      <Numero numero={num} />
      <Numero numero={num} />
      <Numero numero={num} />
      <button onClick={sortear}>Sortear</button>
    </div>
  )
}
