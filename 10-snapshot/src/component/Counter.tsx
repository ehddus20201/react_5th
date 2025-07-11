import { useCallback, useState } from "react";


function slow(){
  console.log('작업중 . . . ');
  
  let sum=0;
  for(let i = 0; i<100000;i++){
    sum+=i;
  }
  return sum;
}

function Counter() {

  // const [number,setNumber] = useState(slow)   이거는 함수 본문만 전달해서 콜백함수처럶
  const [number,setNumber] = useState(()=>slow()) // 그래서 이렇게 콜백함수로하면 한번만 실행한다
  // const [number,setNumber] = useState(slow()) 이거는 넘버가 바뀔때마다 slow 가 계속 실행됨.. 불필요

  const handleClick = useCallback(()=>{

    setNumber(number +1);

  },[number])

  return (
    <>
    <h1>{number}</h1>
    <button type="button" onClick={handleClick}> + </button>
    </>
  )
}

export default Counter