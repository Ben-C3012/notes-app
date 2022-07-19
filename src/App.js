
import './App.css'
import NoteForm from './components/NoteForm/NoteForm'
import { useState } from 'react'
import NoteContainer from './components/NoteForm/NoteContainer'

function App() {
   const [noteArray, setArray] = useState([])

   console.log(noteArray);

   const saveUserData = (noteInput) => {
      setArray(oldArray => [...oldArray, noteInput]);
   }

   const deleteItem = (id) => {
      if (window.confirm("Delete the item?")) {
         const filtered = [...noteArray]
         setArray(filtered.filter((note, index) => note.id !== id));

      }

      else {
          return 
      }
   }







   return (
      <div className='App-Card'>
         <h1>Notes</h1>
         <NoteForm saveUserData={saveUserData} />
         <div className='notes__container'>
            <NoteContainer noteArray={noteArray} setArray={setArray} id={noteArray.id} deleteItem={deleteItem} />

         </div>



      </div>
   );


};

export default App;
