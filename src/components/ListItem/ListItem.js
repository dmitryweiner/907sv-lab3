import React from 'react';
import './ListItem.css';

export default function ListItem({ title, id, handleRemove, isChecked, handleChecked }) {
  return (
    <>
      <div>
        <input
          type="checkbox"
          value={isChecked}
          data-testid="checkbox"
          onClick={() => handleChecked(id)}
        />
        <div className="task" data-testid="task">
          {title}
        </div>
        <button data-testid="test-button" onClick={() => handleRemove(id)}>
          X
        </button>
      </div>
    </>
  );
}
