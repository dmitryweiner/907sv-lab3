import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import reducer, { ACTION_TYPES } from './components/store';

function App() {
  const [list, setList] = useState([]);
  const [isDone, setDone] = useState(false);

  // function addendum(value) {
  //   const newElement = {
  //     id: Math.random().toString(36).substr(2),
  //     title: value,
  //     isChecked: false
  //   };
  //
  //   setList([...list, newElement]);
  // }
  //
  // function clearTask(id) {
  //   setList([...list.filter(element => element.id !== id)]);
  // }
  //
  // function changeCheck(id, isChecked) {
  //   setList([
  //     ...list.map(function (item) {
  //       if (item.id === id) {
  //         return { ...item, isChecked };
  //       }
  //       return item;
  //     })
  //   ]);
  // }

  function dispatch(action) {
    const newList = reducer(action, list);
    setList(newList);
  }
  function filterList(list, isDone) {
    if (!isDone) return list;
    return list.filter(element => element.isChecked);
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
      <List list={filterList(list, isDone)} dispatch={dispatch} />
    </>
  );
}
export default App;
