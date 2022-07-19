
import Note from '../Note/Note'



function NoteContainer({ noteArray , setArray , id , deleteItem }) {



    return (

        noteArray.map((note, index) => {
            return <Note note={note} key={index} noteArray={noteArray} id = {note.id} setArray = {setArray} deleteItem = {deleteItem} />
        })


    )
}

export default NoteContainer