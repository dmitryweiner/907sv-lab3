import React, { useState } from 'react';
import { ACTION_TYPES } from '../store';

export default function ToDoForm({ dispatch }) {
    const [text, setText] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (text === '') return;
        else {
            dispatch({
                type: ACTION_TYPES.ADD,
                payload: text
            });
        }
        setText('');
    }

    return (
        <div>
            <form data-testid="form" onSubmit={handleSubmit}>
                <label htmlFor="new-todo">To do list</label>
                <input
                    data-testid="input-field"
                    type="text"
                    id="new-todo"
                    onChange={e => setText(e.target.value)}
                    value={text}
                />
                <button type="submit" data-testid="AddButton">
                    Добавить
                </button>
            </form>
        </div>
    );
}
