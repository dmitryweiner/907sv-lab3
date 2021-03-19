import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Search from './Search';
import { SEARCH } from '../../store/types';

test('render search component', () => {
  render(<Search />);
  expect(screen.getByTestId('search')).toBeInTheDocument();
});

test('search', () => {
  const value = 'test';
  const dispatch = jest.fn();
  render(<Search dispatch={dispatch} searchString="" />);
  const search = screen.getByTestId('search');
  fireEvent.input(search, { target: { value: value } });
  expect(dispatch).toBeCalledWith({
    type: SEARCH,
    payload: value
  });
});
