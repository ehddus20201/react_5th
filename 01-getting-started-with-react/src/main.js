

// import  {createElement} from './lib/react.js'
// import  {createRoot} from './lib/react-dom.js'



// // <ul class="planet" lang="en">
// //       <li class="item">
// //         <img src="/planet/image-01.jpg" alt="" />
// //         <span class="content">Life on Earth</span>
// //         <button type="button" title="아이템 이동 (위/아래 화살표 키 활용)">
// //           <img
// //             src="./src/icons/icons.svg"
// //           />
// //         </button>
// //       </li>
// //      </ul>

// const listData = {
//   items: [
//     { id: "1", title: "Life on Earth" },
//     { id: "2", title: "Jupiter's massive storms" },
//     { id: "3", title: "Explore Mars now" },
//     { id: "4", title: "Moonlight and craters" },
//   ],
// };

// const app = document.getElementById('app');
// const root = createRoot(app/* 랜더링위치 */);

// // const iconImg = createElement('img',{src:"./src/icons/icons.svg"})
// // const button = createElement('button',{type:'button',title:'아이템 이동'},iconImg)
// // const span = createElement('span',{className:'content'},'Life on Earth')
// // const img = createElement('img',{src:"/planet/image-01.jpg"})
// // const li = createElement('li',{className:'item'},img,span,button)




// const asdf = listData.items.map((index)=>{
//   console.log();
  
  
//   const img =createElement('img',{src:`/planet/image-0${index.id}.jpg`})
//   const span =createElement('span',{className:"content"},index.title)
//   const imgIcon =createElement('img',{src:"./src/icons/icons.svg",alt:"아이템 이동" })
//   const button =createElement('button',{type:"button",title:"아이템 이동"},imgIcon)
//   const li =createElement('li',{className:'item'},img,span,button)
//   return li;
// })

// console.log(asdf);

// const ul = createElement('ul',{className:'planet',lang:'en'},asdf)


// root.render(ul)


























































































import react, { createElement } from "./lib/react.js";
import { createRoot } from "./lib/react-dom.js";

const listData = {
  items: [],
};

// 우회, 대체

/* 이거 복습할때 쌤 깃허브 복사해오기 */
/* 이거 복습할때 쌤 깃허브 복사해오기 */
/* 이거 복습할때 쌤 깃허브 복사해오기 */
/* 이거 복습할때 쌤 깃허브 복사해오기 */
/* 이거 복습할때 쌤 깃허브 복사해오기 */
/* 이거 복습할때 쌤 깃허브 복사해오기 */
/* 이거 복습할때 쌤 깃허브 복사해오기 */

// 왜 프록시를 썼는가??
// 프록시는 순수 자바스크립트 기능. React는 상태에 반응하는것 
// 리액트의 코어는 프록시 없음, vue가 프록시있음 코어에

const reactiveListData = new Proxy(listData,{

  get(target,prop){
    return target[prop];

  },

  set(target,prop,newValue){
    const oldvValue = target[prop];

    target[prop] = newValue;
    render(); // 데이터가 변경되면 렌더 실행 (리액트 정신이다 이마리야)

    return true;

  }

})









const root = createRoot(document.getElementById("app"));


function render() {
  const children = listData.items.map(({ id, title }) => {
    const liElement = createElement(
      "li",
      { key: id, className: "item" },
      createElement("img", { src: `/planet/image-0${id}.jpg`, alt: "" }),
      createElement("span", { className: "content" }, title),
      createElement(
        "button",
        { type: "button", title: "아이템 이동" },
        createElement("img", { src: "./src/icons/icon.svg", alt: "아이템 이동" })
      )
    );
    return liElement;
  });

  const ulElement = createElement(
    "ul",
    { className: "planet", lang: "en" },
    children
  );

  root.render(ulElement);
}


render();

setTimeout(() => {
  reactiveListData.items =[
  ...reactiveListData.items,
  {
    id:1,
    title:'life on Earth'
  }
]
}, 1000);

setTimeout(() => {
  reactiveListData.items =[
  ...reactiveListData.items,
  {
    id:2,
    title:'life on Earth'
  }
]
}, 2000);

setTimeout(() => {
  reactiveListData.items =[
  ...reactiveListData.items,
  {
    id:3,
    title:'life on Earth'
  }
]
}, 3000);


setTimeout(() => {
  reactiveListData.items =[
  ...reactiveListData.items,
  {
    id:4,
    title:'life on Earth'
  }
]
}, 4000);