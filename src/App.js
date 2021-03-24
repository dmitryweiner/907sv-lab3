import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import reducer, { ACTION_TYPES, filteredList } from './components/store';

function App() {
  const [list, setList] = useState([]);
  const [isDone, setDone] = useState(false);

  function dispatch(action) {
    const newList = reducer(action, list);
    setList(newList);
  }

  return (
    <>
      <Form
        handleSubmit={value =>
          dispatch({
            type: ACTION_TYPES.ADD,
            payload: value
          })
        }
      />
      <div>
        <label>
          Выполненные:
          <input checked={isDone} onChange={() => setDone(!isDone)} type="checkbox" />
        </label>
      </div>
      <List list={filteredList({ list, isDone })} dispatch={dispatch} />
    </>
  );
}
export default App;
