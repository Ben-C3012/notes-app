import "./App.css";
import NoteForm from "./components/NoteForm/NoteForm";
import { useState } from "react";
import NoteContainer from "./components/Note/NoteContainer";

function App() {
  const [notes, setNotes] = useState([]);

  const onAddNote = (noteInput) => {
    setNotes((oldArray) => [...oldArray, noteInput]);
  };

  const onDeleteNote = (id) => {
    if (window.confirm("Delete the item?")) {
      const copyNotes = [...notes];
      setNotes(copyNotes.filter((note) => note.id !== id));
    }
  };

  return (
    <div className="App-Card">
      <h1>Notes</h1>

      <NoteForm onAddNote={onAddNote} />

      <div className="notes__container">
        <NoteContainer notes={notes} onDeleteNote={onDeleteNote} />
      </div>
    </div>
  );
}

export default App;
