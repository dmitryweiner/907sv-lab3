import React, { useState } from 'react';
import './App.css';
import List from './components/List/List';
import Form from './components/Form/Form';
import { reducer } from './store';

function App() {
  const [list, setList] = useState([]);
  const [isDone, setIsDone] = useState(false);

  function dispatch(action) {
    const newList = reducer(action, list);
    setList(newList);
  }

  function filterList(list, isDone) {
    if (!isDone) return list;

    return list.filter(element => element.isChecked);
  }

  function DoneHandler(isDone) {
    setIsDone(isDone);
  }

  return (
    <div className="wrapper">
      <div>
        <h1>Список дел</h1>
        <h2>Лабораторная №3 по теме Фильтруемый список в React</h2>
      </div>
      <div>
        <Form dispatch={dispatch} DoneHandler={DoneHandler} isDone={isDone} />
        <List list={filterList(list, isDone)} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
