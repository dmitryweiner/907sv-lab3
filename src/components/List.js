import React from 'react';
import ListItem from './ListItem';

export default function List({ list, deleteHandler, checkedHandler }) {
  if (list.length === 0) {
    return 'Список пустой';
  }
  return (
    <ul>
      {list.map(item => (
        <ListItem
          id={item.id}
          key={item.id}
          title={item.title}
          isChecked={item.isChecked}
          deleteHandler={deleteHandler}
          checkedHandler={checkedHandler}
        />
      ))}
    </ul>
  );
}
