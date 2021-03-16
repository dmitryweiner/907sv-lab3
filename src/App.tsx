import React from 'react';
import { useState } from 'react';
import './App.css';
import List from './components/List/List';
import Form from './components/Form/Form';
import { IAction, Item, reducer, selectFilteredList } from './store';

function App() {
  const [list, setList] = useState<Item[]>([]);
  const [isFiltered, setIsFiltered] = useState(false);

  function dispatch(action: IAction) {
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
            <input
              type="checkbox"
              checked={isFiltered}
              onChange={() => setIsFiltered(!isFiltered)}
            />
          </label>
        </div>
        <List list={selectFilteredList({ list, isFiltered })} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
