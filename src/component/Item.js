import React from 'react';

export default function Item({ text, remove, isCheck, onChecked, id }) {
  return (
    <li>
      <input
        type="checkbox"
        data-testid="checkbox"
        checked={isCheck}
        onClick={() => onChecked(id)}
      />{' '}
      <span data-testid="component">{text}</span>{' '}
      <button data-testid="delete" onClick={() => remove(id)}>
        DELETE
      </button>
    </li>
  );
}
