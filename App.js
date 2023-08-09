import React, {useState} from 'react';
import './styles.css';
import NotesList from './NotesList';
import InputField from './InputField';

function App() {

  const [notesList, setNotesList] = useState([]);

  const addNote = (note) => {
    setNotesList((prev) => [note, ...prev])
  };

  const removeNote = (id) => {
    setNotesList((prev) => prev.filter(note => note.id !== id));
  };

  return (
    <div className="App">
      <h1>Notes</h1>
      <InputField addNote={addNote}/>
      <NotesList notesList={notesList} removeNote={removeNote} />
    </div>
  );
}

export default App;
