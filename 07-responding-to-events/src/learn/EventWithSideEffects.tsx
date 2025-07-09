function EventWithSideEffects() {
  // 카운트 다운 버튼을 클릭시 숫자가 100 -> 0 으로 0.1초씩 감소하여 0이 되었을 때 카운트 종료





  // 여기할때 범쌤이 작성해준 순서도 보고 해보기
  // 여기할때 범쌤이 작성해준 순서도 보고 해보기
  // 여기할때 범쌤이 작성해준 순서도 보고 해보기
  // 여기할때 범쌤이 작성해준 순서도 보고 해보기
  // 여기할때 범쌤이 작성해준 순서도 보고 해보기
  // 여기할때 범쌤이 작성해준 순서도 보고 해보기
  // 여기할때 범쌤이 작성해준 순서도 보고 해보기
  const handleCountDown = ()=>{
    const el = document.querySelector('.count') as HTMLOutputElement
    const timeout = setInterval(() => {
      const current = +el.value
      const next = current -1;
      console.log(next);
      el.value = String(next)
      if(next <= 0){
        clearInterval(timeout)
      }
      
    }, 10);
    
    
    

  }




  return (
    <details open>
      <summary>
        <b>이벤트 핸들러와 사이드 이펙트</b>
      </summary>
      <p>이벤트 핸들러는 사이드 이펙트를 위한 최고의 포지션입니다.</p>
      <p>
        함수를 렌더링하는 것과 다르게 이벤트 핸들러는 순수할 필요가 없기에
        <br />
        무언가를 변경하는데 최적의 위치입니다.
      </p>
      <div className="countDown">
        <button type="button" onClick={handleCountDown}>카운트 다운</button>
        <output className="count">100</output>
      </div>
    </details>
  )
}
export default EventWithSideEffects