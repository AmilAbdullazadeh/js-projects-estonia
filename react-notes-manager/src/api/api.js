import axios from "axios";

const BASE_URL = "http://localhost:3200/notes";

export class NoteAPI {

  static async fetchAll() {
    return await axios.get(BASE_URL).then((res) => res.data);
  }

  static formatId(note) {
    return {
      ...note,
      id: note.id?.toString(),
    };
  }
}
