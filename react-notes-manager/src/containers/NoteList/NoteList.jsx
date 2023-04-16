import { NoteAPI } from "api/api";
import { TextCard } from "components/TextEditor/TextEditor";
import { useDispatch } from "react-redux";
import { deleteNote } from "store/notes/notes-slice";
import s from "./style.module.css";

export function NoteList({ notes }) {
  
  const dispatch = useDispatch();

  const onClickTrash = async (id) => {
    await NoteAPI.deleteById(id);
    dispatch(deleteNote(id));
  };

  return (
    <div className={`row justify-content-center ${s.cards_container}`}>
      {notes.map((note) => (
        <div key={note.id} className={s.card_container}>
          <TextCard
            note={note}
            onClickTrash={() => onClickTrash(note.id)}
          />
        </div>
      ))}
    </div>
  );
}
