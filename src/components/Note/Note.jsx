import './Note.css'
import { useState } from 'react'



function Note({ note, noteArray, setArray, id , index , deleteItem }) {
    const date = new Date().toDateString()



    
    // set items to an array that doesn’t include the item in items at index.
    // const deleteItem = (index) => {
    //     setArray(noteArray.filter((note) => indexOf(note) !== note[index]));
    // };

    // const deleteItem = () => {
    //     setArray(noteArray.filter((note , index) => note.id !== note[index].id));
    // };

    const handleDelete = () => {
        deleteItem(id)
    }





    return (
        <>
            <div className="note-card">
                <span className='title-date'><h4 className='note__title'>{note.noteTitle}</h4><small className='note__date'>{date}</small></span>
                <p>{note.noteInput}</p>
                <span onClick={handleDelete} className='delete-btn'>X</span>

            </div>
        </>
    )
}



export default Note