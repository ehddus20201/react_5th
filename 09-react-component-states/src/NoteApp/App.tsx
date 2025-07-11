import { useState } from "react"
import { getNoteList, type Note } from "./api/getNote"
import NoteListPage from "./pages/NoteListPage"
import { ROUTES } from "./routes";
import NoteDetailPage from "./pages/NoteDetailPage";
import NoteCreatePage from "./pages/NoteCreatePage";

function NoteApp() {
                    // useState에 콜백함수를 전달하면 알아서 렌더링할때 한번만 호출한다 다음에 호출할때는 렌더링 안된다.
  const [routeInfo,setRouteInfo] = useState<{
    route:string;
    noteId: null | number;
  }>({
    route:'list',
    noteId:null,
  });
  const [list,setList] = useState(()=>getNoteList()) // 모든 노트의 데이터 & user 정보

  const handleChangeRoute = (nextRoute:string,pickNoteId:number = 0) =>{

    setRouteInfo({
      ...routeInfo,
      route: nextRoute,
      noteId: pickNoteId ? pickNoteId : routeInfo.noteId,
    })
  } 
  console.log([...list]);
  

  // 노트 생성 함수
  const handleCreateNote = (newNoteItem:Note)=>{
    setList([
      ...list,
      newNoteItem
    ])
  }

  // 파생 상태
  const newNoteId = list.length + 1;

switch (routeInfo.route) {
  case ROUTES.list:
    return <NoteListPage list={list} onChangeRoute={handleChangeRoute} />
  case ROUTES.detail:
    return <NoteDetailPage noteId={routeInfo.noteId} onChangeRoute={handleChangeRoute} />
  case ROUTES.create:
    return <NoteCreatePage newNoteId={newNoteId} onCreate={handleCreateNote} onChangeRoute={handleChangeRoute} />
  case ROUTES.edit:
    return <div>edit 페이지</div>
  default:
    return <div>404 not found</div>


}
}


export default NoteApp