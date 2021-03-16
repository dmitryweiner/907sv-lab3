import React from 'react';

export default function ItemTodoList({ text, isChecked, index, remove, checkHandle }) {
    return (
        <li data-testid="item-list">
            {text}
            <button data-testid="item-delete" onClick={() => remove(index)}>
                x
            </button>
            <input
                data-testid="check"
                type="checkbox"
                checked={isChecked}
                onChange={e => checkHandle(index, e.target.checked)}
            />
        </li>
    );
}
