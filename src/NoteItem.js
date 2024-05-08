import React from 'react';
import './style.css';

function NoteItem({ note, onSelect, onDelete }) {
  return (
    <li className="note-list-item" onClick={() => onSelect(note)}>
      <span>{note.title}</span>
      <button onClick={(e) => { e.stopPropagation(); onDelete(note.id); }}>Delete</button>
    </li>
  );
}

export default NoteItem;
