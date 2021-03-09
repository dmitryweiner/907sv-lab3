import React from 'react';
import { render, screen } from '@testing-library/react';
import List from './List';

test('render list', () => {
  const itemList = ['test'];
  render(<List list={itemList} />);
  const list = screen.getByTestId('list');
  expect(list).toBeInTheDocument();
});
