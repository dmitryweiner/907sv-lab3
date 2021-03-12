import React from 'react';
import { render, screen } from '@testing-library/react';
import List from './List';

test('render list', () => {
  const itemList = ['test'];
  const dispatch = jest.fn();
  render(<List list={itemList} dispatch={dispatch} />);
  const list = screen.getByTestId('list');
  expect(list).toBeInTheDocument();
});
