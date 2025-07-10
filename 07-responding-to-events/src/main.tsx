import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Learn from "./learn/learn";
import "@/styles/global.css"



const container = document.getElementById('root') as HTMLElement;


createRoot(container).render(

  <StrictMode>
    <Learn/>
  </StrictMode>

)