import { SearchBar } from "components/SearchBar/SearchBar";
import { NoteList } from "containers/NoteList/NoteList";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export function NoteBrowse() {
  const noteList = useSelector((state) => state.note.noteList);
  const [searchText, setSearchText] = useState("");

  const filteredNoteList = noteList.filter((item) => {
    const title = item.title
      .trim()
      .toLowerCase()
      .includes(searchText.trim().toLowerCase());
    const content = item.content
      .trim()
      .toLowerCase()
      .includes(searchText.trim().toLowerCase());

    return title || content;
  });

  const handleChange = (value) => {
    setSearchText(value);
  };

  return (
    <>
      <div className="row justify-content-center mb-5">
        <div className="col-sm-12 col-md-4">
          <SearchBar onChange={handleChange} placeholder='Search title or content in note list' />
        </div>
      </div>
      {noteList.length === 0 && (
        <div className="d-flex justify-content-center">
          <span>
            You don't have any note, do you want to Link
            <NavLink to="/note/new"> create one</NavLink>
          </span>
        </div>
      )}
      {noteList.length > 0 && <NoteList notes={filteredNoteList} />}
    </>
  );
}
