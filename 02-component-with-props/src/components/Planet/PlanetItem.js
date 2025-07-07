import React,{createElement as h} from "../../lib/react.js";

export class PlanetItem extends React.Component{

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