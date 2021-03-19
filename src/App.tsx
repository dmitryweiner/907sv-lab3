import React, { useState } from 'react';
import './App.css';
import List from './components/List/List';
import Form from './components/Form/Form';
import { reducer, initialState, selectFilteredItems, searchItems } from './store/store';
import { ACTION_TYPE } from './store/types';
import { ListI } from './store/interfaces/listInterface';
import SelectFilter from './components/SelectFilter/SelectFilter';
import Search from './components/Search/Search';

function App() {
  const [store, setStore] = useState<ListI>(initialState);

  function dispatch(action: ACTION_TYPE) {
    const newList = reducer(action, store);
    setStore(newList);
  }
  return (
    <div className="wrapper">
      <div>
        <h1>Список дел</h1>
        <h2>Лабораторная №3 по теме Фильтруемый список в React</h2>
      </div>
      <div>
        <Form dispatch={dispatch} />
        <SelectFilter dispatch={dispatch} />
        <Search dispatch={dispatch} searchString={store.search} />
        <List list={searchItems(selectFilteredItems(store), store.search)} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
