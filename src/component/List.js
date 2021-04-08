import React from 'react';
import Item from './Item';

export default function List({ list, remove, onChecked }) {
  return (
    <ul>
      {list.map(element => (
        <Item
          text={element.title}
          isCheck={element.isChecked}
          key={element.id}
          id={element.id}
          remove={remove}
          onChecked={onChecked}
        />
      ))}
    </ul>
  );
}
