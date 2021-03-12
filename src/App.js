import React from 'react';
import { useState } from 'react';
import './App.css';
import List from './components/List/List';
import Form from './components/Form/Form';
import { reducer, selectFilteredList } from './store';

function App() {
  const [list, setList] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  function dispatch(action) {
    setList(reducer(action, list));
  }

  return (
    <div className="wrapper">
      <div>
        <h1>Список дел</h1>
        <h2>Лабораторная №3. Список с чекбоксами</h2>
      </div>
      <div>
        <Form dispatch={dispatch} />
        <div>
          <label>
            Показывать только выполненные:
            <input type="checkbox" value={isFiltered} onChange={() => setIsFiltered(!isFiltered)} />
          </label>
        </div>
        <List list={selectFilteredList({ list, isFiltered })} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
