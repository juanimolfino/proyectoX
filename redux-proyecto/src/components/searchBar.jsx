import React, { useState } from 'react';
import { Button } from 'react-bootstrap'

export default function SearchBar({ onSearch }) {

    const [input, setInput] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        setInput('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Buscar Post..." value={input} onChange={e => setInput(e.target.value)} />
                <Button variant="light" type='submit'>Buscar</Button>
            </form>
        </div>
    )
};