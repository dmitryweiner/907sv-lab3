import React, { ChangeEvent } from 'react';
import { ACTION_TYPE, SEARCH } from '../../store/types';

type SearchProps = {
  dispatch: (action: ACTION_TYPE) => void;
  searchString: string;
};

function Search({ dispatch, searchString }: SearchProps) {
  function inputHandler(event: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: SEARCH,
      payload: event.target.value
    });
  }

  return <input data-testid="search" value={searchString} onChange={inputHandler} />;
}

export default Search;
