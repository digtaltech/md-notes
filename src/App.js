import React, { useState } from 'react';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';
import './style.css'; // Импорт стилей

function App() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);

  const addNote = () => {
    const newNote = { id: Date.now(), title: 'New Note', text: '' };
    setNotes([...notes, newNote]);
    setCurrentNote(newNote);
  };

  const updateNote = (id, title, text) => {
    const updatedNotes = notes.map(note => {
      if (note.id === id) {
        return { ...note, title, text };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
    setCurrentNote(null);
  };

  return (
    <div className="app-container">
      <button onClick={addNote}>Add Note</button>

      <NoteList notes={notes} onNoteSelect={setCurrentNote} onNoteDelete={deleteNote} />
      {currentNote && <NoteEditor note={currentNote} onSave={updateNote} />}
    </div>
  );
}

export default App;
