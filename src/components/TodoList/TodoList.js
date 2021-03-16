import React from 'react';
import ItemTodoList from '../TodoItem/TodoItem';

export default function TodoList({ tasks, remove, checkHandle }) {
    function renderTodoList() {
        if (!tasks.length) {
            return 'Tasks list is empty!';
        }
        return (
            <ul>
                {tasks.map(item => (
                    // eslint-disable-next-line react/jsx-key
                    <ItemTodoList
                        text={item.text}
                        key={item.index}
                        index={item.index}
                        isChecked={item.isChecked}
                        remove={remove}
                        checkHandle={checkHandle}
                    />
                ))}
            </ul>
        );
    }

    return <>{renderTodoList()}</>;
}
