import React, { ChangeEvent } from 'react';
import { selectOptions } from './selectOptions';
import { ACTION_TYPE, FILTER } from '../../store/types';

type SelectFilterProps = {
  dispatch: (action: ACTION_TYPE) => void;
};

function SelectFilter({ dispatch }: SelectFilterProps) {
  function selectHandler(event: ChangeEvent<HTMLSelectElement>) {
    dispatch({
      type: FILTER,
      payload: event.target.value
    });
  }

  return (
    <select data-testid="select" onChange={selectHandler}>
      {Object.keys(selectOptions).map((item, index) => (
        <option data-testid={index} key={index} value={item}>
          {Object.values(selectOptions)[index]}
        </option>
      ))}
    </select>
  );
}

export default SelectFilter;
