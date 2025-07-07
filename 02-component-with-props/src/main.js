import React, { createElement as h } from "./lib/react.js";
import ReactDom, { createRoot } from "./lib/react-dom.js";

const listData = {
  items: [
    { id: "1", title: "Life on Earth" },
    { id: "2", title: "Jupiter's massive storms" },
    { id: "3", title: "Explore Mars now" },
    { id: "4", title: "Moonlight and craters" },
  ],
};


{/* <li class="item">
        <img src="/planet/image-01.jpg" alt="" />
        <span class="content">Life on Earth</span>
        <button type="button" title="아이템 이동 (위/아래 화살표 키 활용)">
          <img
            src="./src/icons/icons.svg"
            alt="아이템 이동 (위/아래 화살표 키 활용)"
          />
        </button>
      </li> */}
/* class syntax */

// 1. PlanetItem

class PlanetItem extends React.Component{

  // constructor(props){
  //   super();
  //   console.log(props);
    
  // }
  render(){

    const {title, id} = this.props;

    return h('li',
      {className:'item',id:1},
      h('img',{src:`/planet/image-0${id}.jpg`, alt:''}),
      h('span',{className:'content'},title),
      h('button',{type:"button",title:'move item'},
        h('img',{src:"./src/icons/icons.svg",alt:'move item'})
      ),
    )
  }
}

class PlanetList extends React.Component{

  
  render() {
    const {lang, children} = this.props;

    return h("ul", { className: "planet", lang: "en" },
      children
    )
      
  }


}



// 2. PlanetList

// 3. PlanetPage
class PlanetPage extends React.Component{
  render(){
    return h(
      PlanetList,{
        lang:'en',
        children: listData.items.map(({id,title}) => h(PlanetItem, { key:id, id, title }))
      }
    )
  }
}


/* function syntax */



const container = document.getElementById('app')
const reactrDomRoot = ReactDom.createRoot(container);

reactrDomRoot.render(h(PlanetPage));



