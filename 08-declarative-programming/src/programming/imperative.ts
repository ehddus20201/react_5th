
const template = /* html */`
  <form id="form">
    <h2>프로그래머스 퀴즈!</h2>
    <p>프로그래머스에서 가장 잘생긴 사람은?</p>
    <textarea id="textarea"></textarea>
    <br />
    <button type="submit" id="button">Submit</button>
    <p id="loading" style="display:none">Loading...</p>
    <p id="error" style='display:none; color:red;'>error!</p>
  </form>
  <h1 id="success" style="display:none">정답입니다~~~!!</h1>
  <hr />
`

const app = document.getElementById('app');
app?.insertAdjacentHTML('beforeend',template);

/* -- ----------------------------------------- */



const form = document.getElementById('form') as HTMLFormElement;
const textarea = document.getElementById('textarea') as HTMLTextAreaElement;
const button = document.getElementById('button') as HTMLButtonElement;
const loading = document.getElementById('loading') as HTMLParagraphElement
const error = document.getElementById('error') as HTMLParagraphElement;
const success = document.getElementById('success') as HTMLHeadingElement;


const show = (content:HTMLElement)=>content.style.display='block'; 
const hide = (content:HTMLElement)=>content.style.display='none'; 
const disable = (content:HTMLElement & {disabled:boolean})=>content.disabled=true; 
const enable = (content:HTMLElement & {disabled:boolean})=>content.disabled=false; 

// 타입이랑 속성은 구분해야해서  불린을 {}로 묶어서 타입으로 만든다음 & 연산자로 결합




// console.log(textarea.value);

// function handleButton(e:MouseEvent){
//   e.preventDefault();
//   disable(textarea)
//   disable(button)
//   show(loading)

//   setTimeout(() => {
//   enable(textarea)
//   enable(button)
//   hide(loading)
//   if(textarea.value.trim()==='노동연'){
//     show(success)
//     textarea.value=''
//     hide(form)

//   }else{
//     textarea.value=''

//     show(error)

//   }
    
//   }, 2000);
  
// }



// button.addEventListener('click',handleButton)






















// const hide = (el:HTMLElement) => el.style.display = 'none';
// const show = (el:HTMLElement) => el.style.display = 'block';
// const enable = (el:HTMLElement & {disabled:boolean}) => el.disabled = false;
// const disable = (el:HTMLElement & {disabled:boolean}) => el.disabled = true;


const handleTextareaChange = () => {
  if(textarea.value.length === 0){
    disable(button);
  }else{
    enable(button);
  }
}


// const submitForm = (answer:string):Promise<string> => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if(answer.toLowerCase() === '노동연'){
//         resolve('👍');
//       }else{
//         reject(new Error('땡! 너는 이미 정답을 알고있다.'));
//       }
//     }, 1500);
//   })
// }




const submitForm = (text:string):Promise<string>=>{
  return new Promise((resolve,reject) =>{
    setTimeout(() => {
      
    
    if(text.trim()==='노동연'){
      resolve('좋아용!')
    }else{
      reject(new Error('아으 그거도 모르냐 아으'))
    }
    }, 1500);

  })

}


const handleFormSubmit = async (e:SubmitEvent)=>{
  e.preventDefault();
  disable(textarea);
  disable(button);
  show(loading);
  try{
    await submitForm(textarea.value);
    show(success)

    
  }
  catch(err){
console.log(err.message);
    if(err instanceof Error){
      error.textContent = err.message
      show(error);
      
      
    }

  }
  finally{
    hide(loading);
    enable(textarea);
    enable(button);
//     show(error);

  }



}





// const handleFormSubmit = async (e:SubmitEvent) => {
//   e.preventDefault();

//   disable(textarea)
//   disable(button)
//   show(loading)

//   try{
//     await submitForm(textarea.value);
//     show(success);
//     hide(form);

//   }
//   catch(err){
//     show(error);
//     if(err instanceof Error){
//       error.textContent = err.message
//     }
//   }
//   finally{
//     hide(loading);
//     enable(textarea);
//     enable(button);
//   }
  
// }


// submitForm('윤대웅') resolve , reject



textarea.addEventListener('input',handleTextareaChange);
form.addEventListener('submit',handleFormSubmit)