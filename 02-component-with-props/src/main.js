import React, { createElement as h } from "./lib/react.js";
import ReactDom, { createRoot } from "./lib/react-dom.js";
import PlanetItem from "./components/Planet/PlanetItem.js";
import PlanetList from "./components/Planet/PlanetList.js";
import PlanetPage from "./pages/PlanetPage.js"


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







// 2. PlanetList

// 3. PlanetPage



/* function syntax */



const container = document.getElementById('app')
const reactrDomRoot = ReactDom.createRoot(container);

reactrDomRoot.render(h(PlanetPage));



