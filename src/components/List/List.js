import React from 'react';
import ListItem from '../ListItem/ListItem';

export default function List({ list, handleRemove, handleChecked }) {
  function renderList() {
    if (!list.length) {
      return 'Нет дел в списке';
    }
    return (
      <>
        {list.map(item => (
          <ListItem
            title={item.title}
            id={item.id}
            key={item.id}
            handleRemove={handleRemove}
            isChecked={item.isChecked}
            handleChecked={handleChecked}
          />
        ))}
      </>
    );
  }
  return <div data-testid="list">{renderList()}</div>;
}
