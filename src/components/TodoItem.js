import React from 'react';

export default function ItemTodoList({ item, isChecked, index, remove }) {
    return (
        <li data-testid="item-list">
            {item}
            <button data-testid="item-delete" onClick={() => remove(index)}>
                x
            </button>
            <input data-testid="check" type="checkbox" checked={isChecked} />
        </li>
    );
}
