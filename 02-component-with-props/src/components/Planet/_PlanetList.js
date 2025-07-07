import React,{createElement as h} from "../../lib/react.js";
export function PlanetList (){

  

    const {lang, children} = this.props;

    return h("ul", { className: "planet", lang: "en" },
      children
    )
      
  


}