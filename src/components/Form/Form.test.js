import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Form from './Form';

test('Отображается поле для ввода и кнопка "Добавить"', () => {
  render(<Form />);
  const input = screen.getByTestId('input');
  const button = screen.getByTestId('button');
  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test('Можно ввести что-то в поле для ввода и при нажатии вызывается handleSubmit с параметром, равным тому, что ввели в поле для ввода', () => {
  const field = 'Some text';
  const handleSubmit = jest.fn();
  render(<Form handleSubmit={handleSubmit} />);
  const input = screen.getByTestId('input');
  const form = screen.getByTestId('form');
  fireEvent.input(input, { target: { value: field } });
  expect(handleSubmit).not.toBeCalled();
  fireEvent.submit(form);
  expect(handleSubmit).toBeCalledWith(expect.objectContaining({ field }));
});
