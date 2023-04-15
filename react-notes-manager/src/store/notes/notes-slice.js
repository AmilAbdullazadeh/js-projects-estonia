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
    // addNote
    // updateNote
    // deleteNote
  },
});

export const { setNoteList } = noteSlice.actions;
export const noteReducer = noteSlice.reducer;