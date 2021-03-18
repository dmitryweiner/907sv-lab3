import React from 'react';

function ListItem({ title, id, isChecked, deleteHandler, checkHandler }) {
  return (
    <div className="ListItem">
      <input
        type="checkbox"
        data-testid="checkbox"
        checked={isChecked}
        onChange={e => checkHandler(id, e.target.checked)}
      />
      {title}
      <button data-testid="delete-button" onClick={() => deleteHandler(id)}>
        x
      </button>
    </div>
  );
}
export default ListItem;
