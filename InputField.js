import './styles.css';
import React, {useState} from 'react';

export default function InputField({ addNote }) {
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const note = {name:title, content:contents, id:Date.now()};
        addNote(note);
        setTitle('');
        setContents('');
    }

    return (
        <div className="input">
            <form onSubmit={handleSubmit}>
            <label>What's on your mind? </label>
            <input 
                type="text" 
                value={title}
                placeholder=""
                onChange={({target}) => setTitle(target.value)}
            />
            {!title ? null : (
            <>
                <textarea
                    value={contents}
                    placeholder='description'
                    onChange={({target}) => setContents(target.value)}
                ></textarea><br/>
            </> )
            }
            <button type="submit" >Enter</button>
            </form>
        </div>
    )
}