import React, { useState } from 'react';
import './App.css';
import ToDoForm from './components/TodoForm/ToDoForm';
import TodoList from './components/TodoList/TodoList';
import { reducer } from './store';

export default function App() {
    const [tasks, setTasks] = useState([]);

    function dispatch(action) {
        const newTasks = reducer(action, tasks);
        setTasks(newTasks);
    }
    function filter(tasks, isChecked) {
        if (!isChecked) return tasks;
        return tasks.filter(item => item.isChecked);
    }

    return (
        <div>
            <div>
                <h1>Список дел</h1>
                <h2>Лабораторная №3. Список с фильтрацией</h2>
            </div>
            <ToDoForm dispatch={dispatch} handleClick={handleCheck} isChecked={isChecked} />
            <span> Show only checked </span>
            <br />
            <TodoList tasks={filter(tasks, isChecked)} dispatch={dispatch} />
        </div>
    );
}
