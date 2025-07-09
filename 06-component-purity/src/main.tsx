import { StrictMode } from "react";
import App from "./App";
import {createRoot} from "react-dom/client"




const container = document.getElementById('app');

if(!container) throw new Error('문서에 #app 요소가 존재하지 않습니다')


createRoot(container).render(
  <StrictMode>
    <App/>
  </StrictMode>
)

