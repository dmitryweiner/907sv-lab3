import React, { useState } from 'react';
import { ACTION_TYPES } from '../../store';
import styles from './style.module.css';

function Form({ DoneHandler, isDone, dispatch }) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (value === '') {
      setError('Поле пустое, как твоя голова');
    } else {
      setError('');
      dispatch({
        type: ACTION_TYPES.ADD,
        payload: value
      });
      setValue('');
    }
  }

  function removeListDispatch() {
    dispatch({
      type: ACTION_TYPES.REMOVELIST
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
        <div>
          Только выполненные
          <input
            type="checkbox"
            checked={isDone}
            onChange={event => DoneHandler(event.target.checked)}
          />
        </div>
      </form>
      <button onClick={removeListDispatch}>Очистить список</button>
    </>
  );
}

export default Form;
