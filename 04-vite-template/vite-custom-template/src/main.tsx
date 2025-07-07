/* eslint-disable react/react-in-jsx-scope */

import { createRoot } from "react-dom/client";
import Main from "./components/Main";











/* 
npm i vite -D  비트  설치
npm i react react-dom 리액트 리액트 돔 설치
npm i @types/react @types/react-dom @types/node 리액트, 리액트돔, 노트의 타입 모듈 설치
npm i @vitejs/plugin-react 비트가 리액트를 인식할 수 있도록 플러그인 설치 JSX 읽기위해
npm init @eslint/config@latest 대화형으로 es린트 설치
npm i -D eslint-plugin-react-hooks eslint-plugin-react-refresh es린트에서 훅, 리프레시 다룰 수 있도록 플러그인 설치

*/




const container =document.getElementById('app');


if(container){

// 렌더링
  createRoot(container).render(<Main>hello</Main>)
}else{
  console.warn('문서에 #app 요소가 존재하지 않습니다')
}





