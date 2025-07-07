
import React, {createElement} from './lib/react.js'
import ReactDOM, {createRoot} from './lib/react-dom.js'
import { Greeting } from './data.js'





// React API를 사용해서
// data에서 랜덤한 인사말 1개 선택 후 h1태그로 렌더링

/* 

<h1 name="나라별 인사말 - IT">인사말 : Buon giorno</h1>

*/


// Greeting

const getRandom = (n) => {
  return Math.floor(Math.random() * n);
}
// console.log(Greeting);

const keys = Object.keys(Greeting)
console.log(keys);
const key = keys[getRandom(keys.length)]
console.log(key);
const h2 = createElement('h2',{name:`나라별 인사말 ${key}`},`${key}의 인사말은:${Greeting[key]}입니다`)
console.log(h2);
const app = document.querySelector('#app');
const root = createRoot(app)
root.render(h2);


