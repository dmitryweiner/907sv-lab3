import React from 'react';
import './ListItem.css';

export default function ListItem({ title, id, handleRemove }) {
  return (
    <>
      <div>
        <input type="checkbox" />
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
