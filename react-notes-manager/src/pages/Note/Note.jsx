import { NoteAPI } from "api/api";
import { NoteForm } from "components/NoteForm/NoteForm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteNote } from "store/notes/notes-slice";

export function Note() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isEditable, setIsEditable] = useState(false);

  const note = useSelector((store) =>
    store.note.noteList.find((note) => note.id === +id)
  );

  const submit = async (formValues) => {

    const data = {
      ...formValues,
      id: +id,
      created_at: note?.created_at,
      updateed_at: new Date().toLocaleDateString(),
    };

    await NoteAPI.update(data);
    // dispatch(updateNote(data));
    setIsEditable(false);
  };

  const changeEditable = () => {
    setIsEditable(!isEditable);
  };

  async function deleteNote_() {
    if (window.confirm("Are you sure?")) {
      await NoteAPI.deleteById(id);
      dispatch(deleteNote(+id));
      navigate("/")
    }
  }

  return (
    <>
      {note && (
        <NoteForm
          changeEditable={changeEditable}
          isEditable={true}
          title={isEditable ? "Update note" : note.title}
          note={note}
          onClickDelete={deleteNote_}
          onClickEdit
          onSubmit={submit}
        />
      )}
    </>
  );
}
