import React from 'react';
import './ListItem.css';
import { ACTION_TYPES } from '../../store';

export default function ListItem({ title, id, isChecked, dispatch }) {
  return (
    <>
      <div>
        <input
          type="checkbox"
          value={isChecked}
          data-testid="checkbox"
          onChange={() => dispatch({ type: ACTION_TYPES.CHECK, payload: id })}
        />
        <div className="task" data-testid="task">
          {title}
        </div>
        <button
          data-testid="delete-button"
          onClick={() => dispatch({ type: ACTION_TYPES.DELETE, payload: id })}
        >
          X
        </button>
      </div>
    </>
  );
}
