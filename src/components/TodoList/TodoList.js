import React from 'react';
import ItemTodoList from '../TodoItem/TodoItem';

export default function TodoList({ tasks, dispatch }) {
    function renderTodoList() {
        if (!tasks.length) {
            return 'Tasks list is empty!';
        }
        return (
            <ul>
                {tasks.map(item => (
                    <ItemTodoList
                        text={item.text}
                        key={item.index}
                        index={item.index}
                        isChecked={item.isChecked}
                        dispatch={dispatch}
                    />
                ))}
            </ul>
        );
    }

    return <>{renderTodoList()}</>;
}
