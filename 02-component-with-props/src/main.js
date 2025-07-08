import React, { createElement as h } from "./lib/react.js";
import ReactDom, { createRoot } from "./lib/react-dom.js";
// import PlanetItem from "./components/Planet/PlanetItem.js";
// import PlanetList from "./components/Planet/PlanetList.js";
// import PlanetPage from "./pages/PlanetPage.js"


const listData = {
  items: [
    { id: "1", title: "Life on Earth" },
    { id: "2", title: "Jupiter's massive storms" },
    { id: "3", title: "Explore Mars now" },
    { id: "4", title: "Moonlight and craters" },
  ],
};


    // <ul class="planet" lang="en">
    //   <li class="item">
    //     <img src="/planet/image-01.jpg" alt="" />
    //     <span class="content">Life on Earth</span>
    //     <button type="button" title="아이템 이동 (위/아래 화살표 키 활용)">
    //       <img
    //         src="./src/icons/icons.svg"
    //         alt="아이템 이동 (위/아래 화살표 키 활용)"
    //       />
    //     </button>
    //   </li>
/* class syntax */

// 1. PlanetItem
function PlanetItem({id,title}){

    
    
    
    
    
    return h('li',{className:'item'},h('img',{src:`/planet/image-0${id}.jpg`,alt:""}),h('span',{className:"content"},`${title}`),h('button',{type:'button',title:'아이템 이동'},h('img',{src:"./src/icons/icons.svg",alt:'아이템 이동'})))
  
  
  
}

class PlanetList extends React.Component{

  render(){
    console.log(this.props);
    const {lang, children} =this.props

    return h('ul',{className:'planet',lang:lang},children)
  }
}

// 2. PlanetList

class PlanetPage extends React.Component{

  render(){
    
    return h(
      PlanetList,
      {
        lang:'en',
        children:listData.items.map(({id,title})=>
      h(PlanetItem,{id:id,title:title, key:id})
    )
  }
)
}

}
// 3. PlanetPage






/* function syntax */



const container = document.getElementById('app')
const reactrDomRoot = ReactDom.createRoot(container);

reactrDomRoot.render(h(PlanetPage));


















// class PlanetItem extends React.Component{


  
  
//   render(){
//     console.log(this.props);
//     const {title, id} = this.props;

//     return h('li',
//       {className:'item',id:1},
//       h('img',{src:`/planet/image-0${id}.jpg`, alt:''}),
//       h('span',{className:'content'},title),
//       h('button',{type:"button",title:'move item'},
//         h('img',{src:"./src/icons/icons.svg",alt:'move item'})
//       ),
//     )
//   }
// }

// class PlanetList extends React.Component{

  
//   render() {
//     const {lang, children} = this.props;

//     return h("ul", { className: "planet", lang: "en" },
//       children
//     )
      
//   }


// }




// class PlanetPage extends React.Component{
//   render(){
//     return h(
//       PlanetList,{
//         lang:'en',
//         children: listData.items.map(({id,title}) => h(PlanetItem, { key:id, id, title }))
//       }
//     )
//   }
// }