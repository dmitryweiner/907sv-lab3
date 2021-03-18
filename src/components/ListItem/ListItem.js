import React from 'react';

function ListItem({ title, id, deleteHandler, checkHandler }) {
  return (
    <div className="ListItem">
      <input type="checkbox" data-testid="checkbox" onClick={() => checkHandler(id)} />
      {title}
      <button data-testid="delete-button" onClick={() => deleteHandler(id)}>
        x
      </button>
    </div>
  );
}
export default ListItem;
