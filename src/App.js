import React, { useState } from 'react';
import './App.css';
import ToDoForm from './components/TodoForm/ToDoForm';
import TodoList from './components/TodoList/TodoList';

export default function App() {
    const [tasks, setTasks] = useState([]);
    const [isChecked, setIsChecked] = useState(false);

    function addition(value) {
        const newText = {
            index: Math.random().toString(36).substr(2),
            text: value + '  ',
            isChecked: false
        };
        if (value.length === 0) {
            return;
        }
        setTasks([...tasks, newText]);
    }

    function filter(tasks, isChecked) {
        if (!isChecked) return tasks;
        return tasks.filter(item => item.isChecked);
    }

    function handleDelete(index) {
        tasks.splice(index, 1);
        setTasks([...tasks]);
    }

    function changeIsChecked(index, isChecked) {
        setTasks([
            ...tasks.map(function (item) {
                if (item.index === index) {
                    return { ...item, isChecked };
                }
                return item;
            })
        ]);
    }

    return (
        <div>
            <div>
                <h1>Список дел</h1>
                <h2>Лабораторная №3. Список с фильтрацией</h2>
            </div>
            <ToDoForm addition={addition} />
            <input
                data-testid="only_executed"
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
            />
            <span> Show only checked </span>
            <br />
            <TodoList
                tasks={filter(tasks, isChecked)}
                remove={handleDelete}
                checkHandle={changeIsChecked}
            />
        </div>
    );
}
