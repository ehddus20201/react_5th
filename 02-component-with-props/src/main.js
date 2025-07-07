import React, { createElement as h } from "./lib/react.js";
import ReactDom, { createRoot } from "./lib/react-dom.js";
import { PlanetPage } from "./pages/PlanetPage.js";
import { _PlanetPage } from "./pages/_PlanetPage.js";





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
/* function syntax */



const container = document.getElementById('app')

if(container){
  const reactrDomRoot = ReactDom.createRoot(container);
  reactrDomRoot.render(h(_PlanetPage));
}



