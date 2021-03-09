import React from 'react';

export default function ListItem({ title, id, deleteHandler, isChecked }) {
  return (
    <li>
      <input defaultChecked={isChecked} data-testid="checkbox" type="checkbox" />
      {title}
      <button onClick={() => deleteHandler(id)} data-testid="delete_button">
        [x]
      </button>
    </li>
  );
}
