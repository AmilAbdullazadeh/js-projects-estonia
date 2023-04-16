import axios from "axios";

const BASE_URL = "http://localhost:3200/notes";

export class NoteAPI {

  static async fetchAll() {
    return await axios.get(BASE_URL).then((res) => res.data);
  }

  static async deleteById(id) {
    return await axios.delete(`${BASE_URL}/${id}`).then((res) => res.data);
  }

  static async update(note) {
    return await axios.put(`${BASE_URL}/${note.id}`, note).then((res) => res.data);
  }

  static async add(note) {
    return await axios.post(BASE_URL, note).then((res) => res.data);
  }

}
