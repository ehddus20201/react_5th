import React,{createElement as h} from "../lib/react.js";
import { listData } from "../data/data.js";
import { PlanetItem } from "../components/Planet/PlanetItem.js"
import { PlanetList } from "../components/Planet/PlanetList.js"

export function _PlanetPage (){

    return h(
      PlanetList,{
        lang:'en',
        children: listData.items.map(({id,title}) => h(PlanetItem, { key:id, id, title }))
      }
    )
  
}