import { useState } from "react"
import { getNoteList } from "./api/getNote"
import NoteListPage from "./pages/NoteListPage"

function NoteApp() {
                    // useState에 콜백함수를 전달하면 알아서 렌더링할때 한번만 호출한다 다음에 호출할때는 렌더링 안된다.
  const [list,setList] = useState(()=>getNoteList()) // 모든 노트의 데이터 & user 정보

  
  return (
    <NoteListPage list={list} />
  )
}

export default NoteApp