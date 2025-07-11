import { useState } from "react";

function Counter() {

  const [number,setNumber] = useState(0)

  const handleClick = ()=>{
    console.log('click');
    setNumber(number=>number + 1)
    setNumber(n=>n - 1)
    setNumber(prev=>prev + 1)
    setNumber(40)

  }

  return (
    <>
    <h1>{number}</h1>
    <button type="button" onClick={handleClick}> + </button>
    </>
  )
}

export default Counter