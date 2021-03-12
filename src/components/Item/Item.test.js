import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Item from './Item';
import { REMOVE, CHECKED } from '../../store/types';

test('Render Item', () => {
  const value = 'Hello, item';
  const dispatch = jest.fn();
  render(<Item value={value} dispatch={dispatch} index="1" isChecked={false} />);
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
    type: REMOVE,
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
    type: CHECKED,
    payload: index
  });
});

test('render edit button', () => {
  render(<Item />);
  const editButton = screen.getByTestId('edit');
  expect(editButton).toBeInTheDocument();
});
