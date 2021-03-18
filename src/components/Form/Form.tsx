import React, { FormEvent, useState } from 'react';
import { ACTION_TYPE, ADD, REMOVELIST } from '../../store/types';
import styles from './style.module.css';
import { ItemI } from '../../store/interfaces/itemInterface';

type FormProps = {
  dispatch: (action: ACTION_TYPE) => void;
};

function Form({ dispatch }: FormProps) {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string>('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (value === '') {
      setError('Поле пустое, как твоя голова');
    } else {
      setError('');

      const newItem: ItemI = {
        index: Math.random().toString(36).substr(2),
        value: value,
        isChecked: false
      };

      dispatch({
        type: ADD,
        payload: newItem
      });
      setValue('');
    }
  }

  function removeListDispatch() {
    dispatch({
      type: REMOVELIST
    });
  }

  return (
    <>
      <form data-testid="form" onSubmit={handleSubmit}>
        <input
          data-testid="input"
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Добавить
        </button>
        <div>
          <span className={styles.error}>{error}</span>
        </div>
      </form>
      <button onClick={removeListDispatch}>Очистить список</button>
    </>
  );
}

export default Form;
