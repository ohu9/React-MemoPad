import React from 'react';
import './styles.css';

function Note({name, content, id, removeNote}) {
    return (
        <div className='note'>
            <button onClick={() => removeNote(id)}>x</button>
            <h3>{name}</h3>
            <p>{content}</p>
        </div>
    );
};


export default function NotesList({ notesList, removeNote }) {


    const notes = notesList.map(note => 
        <Note name={note.name} content={note.content} id={note.id} removeNote={removeNote} />);
    return (
        <div>{notes}</div>
    );
};