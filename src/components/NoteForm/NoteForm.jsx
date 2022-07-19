import { useState } from 'react'
import './NoteForm.css'
import { v4 as uuidv4 } from 'uuid';



function NoteForm(props) {
  const [note, setNote] = useState('')
  const [title, setTitle] = useState('')



  const handleNoteChange = (event) => {
    setNote(event.target.value)
  }

  const hanleTitleChange = event => {
    setTitle(event.target.value)
  }

  const handleForm = event => {
    event.preventDefault()
    const formData = {
      noteTitle: title,
      noteInput: note,
      id : uuidv4()
    }


    props.saveUserData(formData)
    setTitle('')
    setNote('')

  }




  return (
    <>
      <div className="Card">

        <form onSubmit={handleForm} className='form' action="blank">
          <input value={title} onChange={hanleTitleChange} placeholder='Title...' className='title-input' type="text" />
          <textarea value={note} onChange={handleNoteChange} className='text-area-input' name="textarea" id="textarea" cols="30" rows="12" placeholder='Note...'></textarea>
          <button className='add-btn'>Add</button>
        </form>



      </div>


    </>

  )
}

export default NoteForm