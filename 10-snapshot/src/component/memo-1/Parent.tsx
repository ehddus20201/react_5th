import { useCallback, useMemo, useState } from "react"
import Child from "./Child"

function Parent() {

  const [count,setCount] = useState(0);

  const handleClick =useCallback(()=>{
    console.log('chiaksdf');
    
  },[])

  const fruits = useMemo(()=>['사과','배','바나나','딸기'],[])

  return (
    <div>
      <h1>Parent Count :{count}</h1>
      <button type="button" onClick={()=>setCount(count+1)}> + 1</button>
      <Child label='나는 자식이다' items={fruits} onClick={handleClick} /> 
    </div>
  )
}
export default Parent



/* 

자식에게 함수를 넘길 때 useCallback 함수를 prop으로 넘길 때 참조 유지
자식에게 배열/객체 넘길 때 useMemo  배열/ 객체 /계산된 값을 props으로 넘길때 참조 유지
자식 컴포넌트를 최적화할 때 React.memo 컴포넌트 리렌더링 최적화 하기 위해서 사용

*/