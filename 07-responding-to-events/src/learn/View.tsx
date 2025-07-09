import { useState } from "react";
import EventHandlerProp from "./EventHandlerProp";
import EventPropagation from "./EventPropagation";
import EventWithSideEffects from "./EventWithSideEffects";

function View(){
  return (
    <div></div>
  )
}
export default View





function RespondingToEvents(){

  const [text,setText] = useState('김유하'); // 이걸 훅이라고 부른다
  
  // let inputValue = ''; 변수 하나 지정해서 바꿔서 넣는건 안된다 유즈 스태이트를 이용하자
  let message ='프롱이'
  const updataeMessage = (add:string):void=>{
      message+=add;
      console.log(message);
      
  }

  return (
    <div className="ViewRespondingToEvent">
      <h1>이벤트 응답</h1>
      <p>사용자와 상호 작용하도록 이벤트를 구성합니다.</p>
      <hr />
      <form 
      action="/?submitted"
      onSubmit={(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const target = e.target as HTMLFormElement;
        const input=target.children[0] as HTMLInputElement;
        console.log(input.value);
        // inputValue = input.value;
        setText(input.value);
        
        
      }}>
        <input 
          name="사용자 이름"
          type="text"
          aria-label="사용자 이름"
          placeholder='심선범' 
          style={{marginRight:"10px"}} // 객체를 만들어서 전달해줘야한다
          />
          {' '} 
        <button type="submit">보내기</button>
      </form>
      <div>
        <output>{text}</output>
      </div>


      <EventHandlerProp onupdataeMessage={updataeMessage}/> {/* 여기있는 온클릭은 이벤트 바인딩하는게 아닌 이름만 온클릭으로 해놓은 것 */}
      <EventPropagation/>
      <EventWithSideEffects/>


    </div>
  )
}

View.RespondingToEvents = RespondingToEvents  // 함수의 본문을 넣은것
// 이거 알아보기 = 컴파운드 컴포넌트라고 부른다
// 키와 밸류 각각