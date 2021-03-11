import React, { useState } from 'react';
import { ACTION_TYPE, CHECKED, EDIT, REMOVE } from '../../store/types';
import styles from './style.module.css';

type ItemProps = {
  value: string;
  index: string;
  isChecked: boolean;
  dispatch: (action: ACTION_TYPE) => void;
};

function Item({ value, index, isChecked, dispatch }: ItemProps) {
  const [error, setError] = useState<string>('');
  function dispatchChecked() {
    dispatch({
      type: CHECKED,
      payload: index
    });
  }

  function dispatchRemove() {
    dispatch({
      type: REMOVE,
      payload: index
    });
  }

  function dispatchEdit() {
    let newItemValue = prompt('Редактирование записи');
    if (newItemValue !== null && newItemValue !== '') {
      setError('');
      dispatch({
        type: EDIT,
        payload: {
          index: index,
          newValue: newItemValue
        }
      });
    } else if (newItemValue === '') {
      setError('Новое значение не должно быть пустым');
    }
  }

  return (
    <li>
      <input
        type="checkbox"
        data-testid="checkbox"
        checked={isChecked}
        onChange={dispatchChecked}
      />
      <span data-testid="item">{value}</span>
      <button data-testid="delete" onClick={dispatchRemove}>
        X
      </button>
      <button data-testid="edit" onClick={dispatchEdit}>
        Редактировать
      </button>
      <span className={styles.error}> {error}</span>
    </li>
  );
}

export default Item;
