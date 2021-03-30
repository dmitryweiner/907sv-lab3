import React from 'react';
import './App.css';
import Form from './components/Form/Form';
import List from './components/List/List';
import { getFilteredList, moveUpHandler, moveDownHandler } from './components/Store';

function App() {
  const [list, setList] = React.useState([]);
  const [isFilterDone, setIsFilterDone] = React.useState(false);

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
  function checkHandler(id) {
    setList([
      ...list.map(function (item) {
        if (item.id === id) {
          return { ...item, isChecked: !item.isChecked };
        }
        return item;
      })
    ]);
  }

  return (
    <div className="body">
      <div className="appWrapper">
        <div className="name">
          <h1>ᕕ( ᐛ )ᕗ To do:</h1>
        </div>
        <Form
          addHandler={value => addHandler(value)}
          isFilterDone={isFilterDone}
          filterHandler={() => setIsFilterDone(!isFilterDone)}
        />
        <List
          list={getFilteredList(list, isFilterDone)}
          deleteHandler={id => deleteHandler(id)}
          checkHandler={checkHandler}
          moveUpHandler={id => setList([...moveUpHandler(list, id)])}
          moveDownHandler={id => setList([...moveDownHandler(list, id)])}
        />
      </div>
    </div>
  );
}

export default App;
