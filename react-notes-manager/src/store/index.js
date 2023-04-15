import { configureStore } from "@reduxjs/toolkit";
import { noteReducer } from "./notes/notes-slice";

export const store = configureStore({
  reducer: {
    note: noteReducer,
  },
});
