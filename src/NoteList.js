import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onNoteSelect, onNoteDelete }) {
  return (
    <ul>
      {notes.map(note => (
        <NoteItem key={note.id} note={note} onSelect={onNoteSelect} onDelete={onNoteDelete} />
      ))}
    </ul>
  );
}

export default NoteList;
