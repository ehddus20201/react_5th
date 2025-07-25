import { useId, useState } from "react";
import type { Note } from "../api/getNote";
import { getUserList } from "../api/getUser";
import "./NoteForm.css"

interface Props {
  mode: string;
  newNoteId: number;
  onCreate: (newNoteItem: Note) => void;
  onBackLink: () => void;
}

const userList = getUserList();

type Form = React.FormEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>

function NoteForm({ mode, newNoteId, onCreate, onBackLink }: Props) {

  
  const [formData, setFormData] = useState(() => {
    return {
      title: "",
      content: "",
      userId: 0,
    };
  });

  const titleId = useId();
  const contentId = useId();
  const userId = useId();

  const handleUpdateFormData = (e:Form) =>{
    const {name,value}=e.target;
    const nextFormData ={
      ...formData,
      [name]:value
    }

    
    setFormData(nextFormData)
  }

  const handleCreateNote = () => {};

  return (
    <form className="NoteForm">
      <div className="formControl">
        <label htmlFor={titleId}>제목</label>
        <input
          id={titleId}
          type="text"
          name="title"
          onChange={handleUpdateFormData}
        />
      </div>
      <div className="formControl">
        <label htmlFor={contentId}>내용</label>
        <textarea
          id={contentId}
          name="content"
          onChange={handleUpdateFormData}
        />
      </div>
      <div className="formControl">
        <label htmlFor={userId}>작성자</label>
        <select
          id={userId}
          name="userId"
          onChange={handleUpdateFormData}
        >
        <option>작성자를 선택하세요</option>
        {
          userList.map((user)=>(
            <option key={user.id} value={user.id}>{user.name}</option>
          ))
        }
        </select>
      </div>

      <div className="buttonGroup">
        <button type="submit">추가</button>
        <button type="reset">초기화</button>
      </div>


    </form>
  );
}
export default NoteForm;