
// 대상 찾기
// 명령형

const container = document.getElementById('imperative-programming')
console.log(container);

const button = container?.querySelector('button') as HTMLButtonElement
console.log(button);
const input = container?.querySelector('input') as HTMLInputElement
console.log(input);


function handleinput(e){
  //checkbox, radio 에만 사용가능한 checked 옵션
  console.log(e.target.checked);
   
  
  if(input?.checked===true){
    button.textContent='활성 상태'
    button.disabled=false;
  }else{
    button.textContent='비활성 상태'
    button.disabled=true;

  }
  
  
}


input.addEventListener('change',handleinput)



// const container = document.getElementById('imperative-programming')!

// const checkbox = document.querySelector('input[type="checkbox"]') as HTMLInputElement
// const button = document.querySelector('button') as HTMLButtonElement

// function handleChange(e:Event){
//   const {checked} = e.target as HTMLInputElement;
//   console.log(checked);
//   if(checked){
//     button.removeAttribute('disabled')
//     button.textContent = '활성 상태'
//   }else{
//     button.setAttribute('disabled','true')
//     button.textContent = '비활성 상태'

//   }
  
  
// }


// checkbox.addEventListener('change',handleChange);
