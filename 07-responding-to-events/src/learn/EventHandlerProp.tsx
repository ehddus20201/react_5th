interface Props{
  onupdataeMessage:(add:string)=> void;
}



function EventHandlerProp({onupdataeMessage}:Props) {

  const handleMouseEnter = () =>{
    console.log('enter');
    onupdataeMessage('엔터엔터')
    
  }
  
  const handleMouseLeave = () =>{
    console.log('leave');
    onupdataeMessage('떠나라')
    
  }

  return (
    
    <details>
      <summary
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
        <b>이벤트 핸들러 추가하기</b>
      </summary>
      <p>
        이벤트 핸들러 추가를 위해서는 먼저 함수를 정의하고
        <br />
        이를 적절한 JSX 요소에 prop으로 전달해야 합니다.
      </p>
    </details>
  )
}

export default EventHandlerProp