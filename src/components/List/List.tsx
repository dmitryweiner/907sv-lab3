import React from 'react';
import Item from '../Item/Item';
import { ACTION_TYPE } from '../../store/types';
import { ItemI } from '../../store/interfaces/itemInterface';

type ListProps = {
  list: ItemI[];
  dispatch: (action: ACTION_TYPE) => void;
};

function List({ list, dispatch }: ListProps) {
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
