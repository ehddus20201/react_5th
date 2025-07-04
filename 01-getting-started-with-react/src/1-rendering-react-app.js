// import  {createElement} from './lib/react.js'
// import  {createRoot} from './lib/react-dom.js'



// <ul class="planet" lang="en">
//       <li class="item">
//         <img src="/planet/image-01.jpg" alt="" />
//         <span class="content">Life on Earth</span>
//         <button type="button" title="아이템 이동 (위/아래 화살표 키 활용)">
//           <img
//             src="./src/icons/icons.svg"
//             alt="아이템 이동 (위/아래 화살표 키 활용)"
//           />
//         </button>
//       </li>

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



// const img =createElement('img',{src:"/planet/image-01.jpg"})
// const span =createElement('span',{className:"content"},'Life on Earth')
// const imgIcon =createElement('img',{src:"./src/icons/icons.svg",alt:"아이템 이동" })


// const button =createElement('button',{type:"button",title:"아이템 이동"},imgIcon)

// const li =createElement('li',{className:'item'},img,span,button)
// const ul =createElement('ul',{className:'planet',lang:"en"},li)

// const asdf = listData.items.map((id,title)=>{
  
//   const img =createElement('img',{src:`/planet/image-0${id}.jpg`})
//   const span =createElement('span',{className:"content"},title)
//   const imgIcon =createElement('img',{src:"./src/icons/icons.svg",alt:"아이템 이동" })
//   const button =createElement('button',{type:"button",title:"아이템 이동"},imgIcon)
//   const li =createElement('li',{className:'item'},img,span,button)
//   return li;
// })

// root.render(asdf);






import { createElement } from "./lib/react.js";
import { createRoot } from "./lib/react-dom.js";




const listData = {
  items: [
    { id: "1", title: "Life on Earth" },
    { id: "2", title: "Jupiter's massive storms" },
    { id: "3", title: "Explore Mars now" },
    { id: "4", title: "Moonlight and craters" },
  ],
};


const children = listData.items.map(({id, title})=>{

  const liElement = createElement('li',{className:'item'},
    createElement('img',{src:`/planet/image-0${id}.jpg`,alt:''}),
    createElement('span',{className:'content'},title),
    createElement('button',{type:'button',title:'아이템 이동'},
      createElement('img',{src:'./src/icons/icons.svg',alt:'아이템 이동'})
    ),
  )

  return liElement

})


const ulElement = createElement('ul',{className:'planet',lang:'en'},children)

const root = createRoot(document.getElementById('app'));
console.log(root);


function render(){
root.render(ulElement);

}

render();


setTimeout(() => {
  root.unmount();
}, 2000);



