import { NoteAPI } from "api/api";
import { NoteForm } from "components/NoteForm/NoteForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNote } from "store/notes/notes-slice";

export function NoteCreate(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submit = async (formValues) => {
        const note = {
          ...formValues,
          created_at: new Date().toLocaleDateString(),
          updated_at: '',
        };
        await NoteAPI.add(note);
        dispatch(addNote(note));
        navigate("/");
    };

  return (
      <NoteForm
        title="Create Note"
        onSubmit={submit}
      />
  );
}
