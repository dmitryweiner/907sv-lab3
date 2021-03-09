import React from 'react';
import { ACTION_TYPES } from '../../store';

function Item({ value, index, isChecked, dispatch }) {
  function dispatchChecked() {
    dispatch({
      type: ACTION_TYPES.CHECKED,
      payload: index
    });
  }

  function dispatchRemove() {
    dispatch({
      type: ACTION_TYPES.REMOVE,
      payload: index
    });
  }

  function dispatchEdit() {
    dispatch({
      type: ACTION_TYPES.EDIT,
      payload: index
    });
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
    </li>
  );
}

export default Item;
