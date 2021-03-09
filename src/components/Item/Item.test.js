import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Item from './Item.js';
import { ACTION_TYPES } from '../../store';

test('Render Item', () => {
  const value = 'Hello, item';
  render(<Item value={value} />);
  const element = screen.getByTestId('item');
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent(value);
});

test('delete item', () => {
  const index = 'test';
  const dispatch = jest.fn();
  const value = 'test';
  render(<Item index={index} dispatch={dispatch} value={value} />);
  const button = screen.getByTestId('delete');
  expect(button).toBeInTheDocument();
  expect(dispatch).not.toBeCalled();
  fireEvent.click(button);
  expect(dispatch).toBeCalledWith({
    type: ACTION_TYPES.REMOVE,
    payload: index
  });
});

test('render checkbox', () => {
  render(<Item />);
  const checkbox = screen.getByTestId('checkbox');
  expect(checkbox).toBeInTheDocument();
});

test('item checked', () => {
  const dispatch = jest.fn();
  const index = 1;
  render(<Item index={index} dispatch={dispatch} />);
  const checkbox = screen.getByTestId('checkbox');
  expect(checkbox).toBeInTheDocument();
  expect(dispatch).not.toBeCalled();
  fireEvent.click(checkbox);
  expect(dispatch).toBeCalledWith({
    type: ACTION_TYPES.CHECKED,
    payload: index
  });
});

test('render edit button', () => {
  render(<Item />);
  const editButton = screen.getByTestId('edit');
  expect(editButton).toBeInTheDocument();
});

test('edit item', () => {
  const dispatch = jest.fn();
  const index = 'test';
  render(<Item index={index} dispatch={dispatch} />);
  const editButton = screen.getByTestId('edit');
  expect(dispatch).not.toBeCalled();
  fireEvent.click(editButton);
  expect(dispatch).toBeCalledWith({
    type: ACTION_TYPES.EDIT,
    payload: index
  });
});
