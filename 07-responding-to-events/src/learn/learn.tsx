import NavContents from "@/learn/NavContents"
import View from "./View"
import ScrollDown from "./ScrollDown"

function Learn(){
  return(
    <div className="Learn">
      <NavContents/>
      <View.RespondingToEvents/>
      <ScrollDown/>
    </div>
  )
}
export default Learn