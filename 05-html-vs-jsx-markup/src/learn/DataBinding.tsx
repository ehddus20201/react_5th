// import { Fragment } from "react/jsx-runtime"

import getRandom from "@/utils/getRandom";
import type { JSX } from "react";

interface Props{
  statusMessage: statusMessage[];
}

function DataBinding({statusMessage}:Props):JSX.Element{ // 하나로 묶어서 리턴을 해줘야한다
  // div 같은 쓸데없는걸로 감싸지 말고 프레그먼트로 감싸면 생략이 된다
  // 근데 굳이 태그 이름 안쓰고 빈태그로 감싸도 알아서 리액트가 해준다
  const message = statusMessage[getRandom(statusMessage.length)];
  
  return (
    <>
    <dt>데이터 바인딩 (data binding)</dt>
    <dd>
      <p>상태 메시지(status message)를 연결해 화면에 출력합니다.</p>
      <span className='status'>{message}</span>

    </dd>
    </>
  )
}

export default DataBinding