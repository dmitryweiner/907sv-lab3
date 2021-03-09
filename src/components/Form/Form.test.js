import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';
import { ACTION_TYPES } from '../../store';

test('render Form', () => {
  render(<Form />);
  const form = screen.getByTestId('form');
  expect(form).toBeInTheDocument();
});

test('enter text and submit', () => {
  const dispatch = jest.fn();
  const value = 'test';
  render(<Form dispatch={dispatch} />);
  const input = screen.getByTestId('input');
  const form = screen.getByTestId('form');
  fireEvent.input(input, { target: { value: value } });
  expect(dispatch).not.toBeCalled();
  fireEvent.submit(form);
  expect(dispatch).toBeCalledWith({
    type: ACTION_TYPES.ADD,
    payload: value
  });
});

test('validate error', () => {
  render(<Form />);
  const input = screen.getByTestId('input');
  const form = screen.getByTestId('form');
  fireEvent.input(input, { target: { value: '' } });
  fireEvent.submit(form);
  const error = screen.getByText(/Поле пустое, как твоя голова/i);
  expect(error).toBeInTheDocument();
});
