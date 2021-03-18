import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SelectFilter from './SelectFilter';
import { FILTER } from '../../store/types';

test('render SelectFilter', () => {
  render(<SelectFilter />);
  expect(screen.getByTestId('select')).toBeInTheDocument();
});

test('click select options', () => {
  const dispatch = jest.fn();
  render(<SelectFilter dispatch={dispatch} />);
  const select = screen.getByTestId('select');

  fireEvent.change(select, { target: { value: 'All' } });
  expect(dispatch).toBeCalledWith({
    type: FILTER,
    payload: 'All'
  });

  fireEvent.change(select, { target: { value: 'Completed' } });
  expect(dispatch).toBeCalledWith({
    type: FILTER,
    payload: 'Completed'
  });

  fireEvent.change(select, { target: { value: 'NotCompleted' } });
  expect(dispatch).toBeCalledWith({
    type: FILTER,
    payload: 'NotCompleted'
  });
});
