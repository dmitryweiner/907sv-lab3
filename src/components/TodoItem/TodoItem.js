import React from 'react';
import { ACTION_TYPES } from '../store';

export default function ItemTodoList({ text, isChecked, index, dispatch }) {
    function dispatchDelete() {
        dispatch({
            type: ACTION_TYPES.DELETE,
            payload: index
        });
    }

    function dispatchCheck() {
        dispatch({
            type: ACTION_TYPES.CHECKING,
            payload: index
        });
    }

    return (
        <li data-testid="item-list">
            {text}
            <button data-testid="item-delete" onClick={dispatchDelete}>
                x
            </button>
            <input
                data-testid="check"
                type="checkbox"
                checked={isChecked}
                onChange={dispatchCheck}
            />
        </li>
    );
}
