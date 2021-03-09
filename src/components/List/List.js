import React from 'react';
import Item from '../Item/Item';

function List({ list, dispatch }) {
  return (
    <>
      <div data-testid="list">
        {list.map(item => (
          <Item
            value={item.value}
            index={item.index}
            key={item.index}
            isChecked={item.isChecked}
            dispatch={dispatch}
          />
        ))}
      </div>
    </>
  );
}

export default List;
