import Note from "./Note";

function NoteContainer(props) {
  const { notes, onDeleteNote } = props;

  return notes.map((note, index) => {
    return <Note key={index} note={note} onDeleteNote={onDeleteNote} />;
  });
}

export default NoteContainer;
