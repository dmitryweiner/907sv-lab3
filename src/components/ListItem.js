import React from 'react';

export default function ListItem({ title, id, deleteHandler, checkedHandler, isChecked }) {
  return (
    <li>
      <input
        defaultChecked={isChecked}
        onChange={e => checkedHandler(id, e.target.checked)}
        data-testid="checkbox"
        type="checkbox"
      />
      {title}
      <button onClick={() => deleteHandler(id)} data-testid="delete_button">
        [x]
      </button>
    </li>
  );
}
