import { App } from "App";
import { NoteBrowse } from "pages/NoteBrowse/NoteBrowse";
import { NoteCreate } from "pages/NoteCreate/NoteCreate";
import { PageNotFound } from "pages/PageNotFound/PageNotFound";

import { Note } from "pages/Note/Note";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { store } from "./store";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<App />}>
            <Route path="/" element={<NoteBrowse />} />
            <Route path="/note/new" element={<NoteCreate />} />
            <Route path="/note/:id" element={<Note />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
















// <Route path="/" exact element={<App />}>
//   <Route path="/" element={<NoteBrowse />} />
//   <Route path="/note/new" element={<NoteCreate />} />
//   <Route path="/note/:noteId" element={<Note />} />
//   <Route path="*" element={<PageNotFound />} />
// </Route>;
