// import "@/learn/about-purity"
// import "@/learn/about-side-effect"

import  AvatarListPage  from "@/pages/AvatarList";
import "@/styles/main.css"
import { avatarData } from "./data/data";

function App(){
  return(
    <AvatarListPage list={avatarData}/>
  )
}
export default App