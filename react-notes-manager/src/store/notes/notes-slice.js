import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "noteSlice",
  initialState: {
    noteList: [],
  },
  reducers: {
    setNoteList: (state, action) => {
      state.noteList = action.payload;
    },
    addNote: (state, action) => {
      state.noteList.push(action.payload);
    },
    updateNote: (state, action) => {
      state.noteList = state.noteList.map((note) => {
        if (note.id === action.payload.id) {
          return action.payload;
        }
        return note;
      })
    },
    deleteNote: (state, action) => {
      state.noteList = state.noteList.filter((note) => note.id !== action.payload);
    },
  },
});

export const { setNoteList, deleteNote, addNote, updateNote } = noteSlice.actions;
export const noteReducer = noteSlice.reducer;