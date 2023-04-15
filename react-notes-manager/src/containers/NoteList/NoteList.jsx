import { TextCard } from "components/TextEditor/TextEditor";
import s from "./style.module.css";

export function NoteList({notes}) {

  return (
    <div className={`row justify-content-center ${s.cards_container}`}>
      {notes.map((note) => (
        <div key={note.id} className={s.card_container}>
          <TextCard
            title={note.title}
            subtitle={note.created_at}
            content={note.content}
            onClickTrash={() => console.log("trash")}
            onClick={() => console.log("card")}
          />
        </div>
      ))}
    </div>
  );
}
