import { NoteAPI } from "api/api";
import { Footer } from "components/Footer/Footer";
import { Header } from "components/Header/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { setNoteList } from "store/notes/notes-slice";


export function App() {
  const dispatch = useDispatch();

  async function fetchNotes() {
    const response = await NoteAPI.fetchAll();
    dispatch(setNoteList(response));
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      <Header />
      <div style={{ padding: 50 }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
