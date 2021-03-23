import React, { useState } from 'react';
import reducer, { listFilter } from './components/store';
import ToDoForm from './components/TodoForm/ToDoForm';
import TodoList from './components/TodoList/TodoList';

export default function App() {
    const [tasks, setTasks] = useState([]);
    const [isChecked, setIsChecked] = useState(false);

    function dispatch(action) {
        const newTasks = reducer(action, tasks);
        setTasks(newTasks);
    }
    function handleCheck() {
        setIsChecked(isChecked);
    }

    return (
        <div>
            <div>
                <h1>Список дел</h1>
                <h2>Лабораторная №3. Список с фильтрацией</h2>
            </div>
            <ToDoForm dispatch={dispatch} handleClick={handleCheck} isChecked={isChecked} />
            <span> Show only checked </span>
            <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
            <br />
            <TodoList tasks={listFilter({ tasks, isChecked })} dispatch={dispatch} />
        </div>
    );
}
