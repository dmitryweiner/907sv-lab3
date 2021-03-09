import React from 'react';
import ListItem from '../ListItem/ListItem';

export default function List({ list, handleRemove }) {
  function renderList() {
    if (!list.length) {
      return 'Нет дел в списке';
    }
    return (
      <>
        {list.map(item => (
          <ListItem title={item.title} key={item.id} handleRemove={handleRemove} id={item.id} />
        ))}
      </>
    );
  }
  return <div data-testid="list">{renderList()}</div>;
}
