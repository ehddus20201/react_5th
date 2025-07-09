import createState from "@/lib/createState";

const data = {
  checked:false
}
/* 
**state가 변경될 때** 호출 되는 렌더 함수
react에서 컴포넌트가 리렌더링되는 효과는 흉내
*/
const render = () =>{

  const {checked} = state;
  console.log('checked 상태 업데이트!',state.checked);
  // checkbox.checked = checked;
  // if(checked){
  //   button.removeAttribute('disabled')
  //   button.textContent='활성 상태'
  // }else{
  //   button.setAttribute('disabled','true');
  //   button.textContent = '비활성 상태'
  // }

  
}
/* 
state : 현재 상태
setState : 상태를 업데이트하고 render()를 실행시켜주는 함수
React의 const [count,setCount] = useState(0) 유사합니다
*/
const [state,setState] = createState(data,render)

console.log('초기 상태', state.checked);


function update(){
  const nextCheckedValue = !state.checked
  setState('checked',nextCheckedValue)
}

update()

globalThis.update = update;
// createState()
const container = document.getElementById('declarative-programming')!;
const checkbox = container.querySelector('input[type="checkbox"]') as HTMLInputElement;
const button = container.querySelector('button') as HTMLButtonElement


// checkbox.addEventListener('change')