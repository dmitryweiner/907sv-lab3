import React from 'react';
import './App.css';
import List from './component/List';
import Form from './component/Form';

function App() {
  const [list, setList] = React.useState([]);
  const [filterIsChecked, setFilterIsChecked] = React.useState(false);

  function handleSubmit({ field }) {
    const newElement = {
      id: Math.random().toString(36).substr(2),
      title: field,
      isChecked: false
    };
    setList([...list, newElement]);
  }

  function checkbox(id) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        list[i].isChecked = !list[i].isChecked;
      }
    }
    setList([...list]);
  }

  function remove(id) {
    const a = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i].id !== id) {
        a.push(list[i]);
      }
    }
    setList([...a]);
    console.log(id);
  }

  function getFilteredList(list) {
    if (filterIsChecked) {
      return list.filter(list => list.isChecked);
    }
    return list;
  }

  return (
    <div className="wrapper">
      <div>
        <h1>Список дел</h1>
        <h2>Лабораторная №3. Динамический список</h2>
      </div>
      <div>
        <List list={getFilteredList(list)} remove={remove} onChecked={checkbox} />
        <Form handleSubmit={handleSubmit} />
        <label>
          Фильтр по выполненным:
          <input
            type="checkbox"
            checked={filterIsChecked}
            onChange={() => setFilterIsChecked(!filterIsChecked)}
          />
        </label>
      </div>
    </div>
  );
}

export default App;
