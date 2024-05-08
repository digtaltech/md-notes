import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown'
import './style.css';
import remarkGfm from 'remark-gfm'

function NoteEditor({ note, onSave }) {
    const [title, setTitle] = useState(note.title);
    const [text, setText] = useState(note.text);

    useEffect(() => {
        setTitle(note.title);
        setText(note.text);
    }, [note]);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleSave = () => {
        onSave(note.id, title, text);
    };

    return (
        <div>
            <button onClick={handleSave}>Save</button>

            <div className='note-block'>
                <div className="preview-block">
                    <div className='edtor'>
                        <input
                            className="note-input"
                            value={title}
                            onChange={handleTitleChange}
                            placeholder="Title"
                        />
                        <textarea
                            className="note-textarea"
                            value={text}
                            onChange={handleTextChange}
                            placeholder="Write your note here..."
                        />
                    </div>
                </div>


                <div className="markdown-container">
                    <Markdown remarkPlugins={[remarkGfm]}>{text}</Markdown >
                </div>

            </div>
        </div>
    );
}

export default NoteEditor;
