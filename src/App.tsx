import React, { useState } from 'react';
import './App.css';
import List from './components/List/List';
import Form from './components/Form/Form';
import { reducer } from './store/store';
import { ACTION_TYPE } from './store/types';
import { ListI } from './store/interfaces/listInterface';
import { ItemI } from './store/interfaces/itemInterface';

function App() {
  const [list, setList] = useState<ListI>({ items: [] });
  const [isDone, setIsDone] = useState<boolean>(false);

  function dispatch(action: ACTION_TYPE) {
    const newList = reducer(action, list);
    setList(newList);
  }

  function filterList(list: ListI, isDone: boolean): ItemI[] {
    if (!isDone) return list.items;

    return list.items.filter(element => element.isChecked);
  }

  function DoneHandler(isDone: boolean) {
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
