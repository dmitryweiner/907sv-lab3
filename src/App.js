import React from 'react';
import { useState } from 'react';
import './App.css';
import List from './components/List/List';
import Form from './components/Form/Form';

function App() {
  const [list, setList] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  function add({ field }) {
    const newTask = {
      id: Math.random().toString(36).substr(2),
      title: field,
      isChecked: false
    };
    setList([...list, newTask]);
  }

  function remove(id) {
    setList([...list.filter(item => item.id !== id)]);
  }

  function check(id) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        list[i].isChecked = !list[i].isChecked;
      }
    }
    setList([...list]);
  }

  function select(list, isFiltered) {
    if (isFiltered) {
      return list.filter(item => item.isChecked === isFiltered);
    }
    return list;
  }

  return (
    <div className="wrapper">
      <div>
        <h1>Список дел</h1>
        <h2>Лабораторная №3. Список с чекбоксами</h2>
      </div>
      <div>
        <Form handleSubmit={add} />
        <div>
          <label>
            Показывать только выполненные:
            <input type="checkbox" value={isFiltered} onChange={() => setIsFiltered(!isFiltered)} />
          </label>
        </div>
        <List list={select(list, isFiltered)} handleRemove={remove} handleChecked={check} />
      </div>
    </div>
  );
}

export default App;
