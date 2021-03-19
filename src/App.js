import React from 'react';
import './App.css';
import Form from './components/Form/Form';
import List from './components/List/List';

function App() {
  const [list, setList] = React.useState([]);

  function addHandler(value) {
    const newElement = {
      id: Math.random().toString(36).substr(2),
      isChecked: false,
      title: value
    };
    setList([...list, newElement]);
  }
  function deleteHandler(id) {
    setList([...list.filter(item => item.id !== id)]);
  }
  function checkHandler(id, isChecked) {
    setList([
      ...list.map(function (item) {
        if (item.id === id) {
          return { ...item, isChecked };
        }
        return item;
      })
    ]);
  }
  return (
    <div className="wrapper">
      <div>
        <h1>ᕕ( ᐛ )ᕗ To do:</h1>
      </div>
      <Form addHandler={value => addHandler(value)} />
      <List list={list} deleteHandler={id => deleteHandler(id)} checkHandler={checkHandler} />
    </div>
  );
}

export default App;
