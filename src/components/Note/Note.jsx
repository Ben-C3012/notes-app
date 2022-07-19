import "./Note.css";

function Note(props) {
  const { note, onDeleteNote } = props;

  const date = new Date().toDateString();

  const handleDelete = () => {
    onDeleteNote(note.id);
  };

  return (
    <div className="note-card">
      <div className="title-date">
        <h4 className="note__title">{note.noteTitle}</h4>
        <small className="note__date">{date}</small>
      </div>

      <p>{note.noteInput}</p>

      <button onClick={handleDelete} className="delete-btn">
        X
      </button>
    </div>
  );
}

export default Note;
