import React from 'react';
import { useState } from 'react';
import './Form.css';
import { ACTION_TYPES } from '../../store';

export default function Form({ dispatch }) {
  const [field, setField] = useState('');

  function handleSubmitInner(e) {
    e.preventDefault();
    dispatch({ type: ACTION_TYPES.ADD, payload: field });
    setField('');
  }

  return (
    <>
      <form data-testid="form" onSubmit={handleSubmitInner}>
        <input data-testid="input" value={field} onChange={e => setField(e.target.value)} />
        <button data-testid="button" type="submit">
          Добавить
        </button>
      </form>
    </>
  );
}
