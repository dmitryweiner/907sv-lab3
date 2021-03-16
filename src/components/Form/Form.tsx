import React, { FormEvent, useState } from 'react';
import './Form.css';
import { ACTION_TYPES, IAction } from '../../store';

type FormProps = {
  dispatch: (action: IAction) => {};
};

export default function Form({ dispatch }: FormProps) {
  const [field, setField] = useState('');

  function handleSubmitInner(e: FormEvent) {
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
