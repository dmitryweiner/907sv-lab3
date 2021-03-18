import React from 'react';
import ListItem from '../ListItem/ListItem';

function List({ list, deleteHandler, checkHandler }) {
  if (list.length === 0) {
    return <>There are no elements yet (￣︿￣)</>;
  }
  return (
    <ul>
      {list.map(item => (
        <ListItem
          id={item.id}
          key={item.id}
          title={item.title}
          deleteHandler={deleteHandler}
          checkHandler={checkHandler}
        />
      ))}
    </ul>
  );
}
export default List;
