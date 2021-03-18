import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ListItem from './ListItem';
import { ACTION_TYPES } from './store';

const id = '123';
const title = '123';

test('Проверка на отражение содержимого', () => {
  const title = 'task';
  const id = '123';
  const dispatch = jest.fn();
  render(<ListItem title={title} id={id} dispatch={dispatch} />);
  expect(screen.getByText(title)).toBeInTheDocument();

  const button = screen.getByTestId('delete_button');
  expect(button).toBeInTheDocument();
  fireEvent.click(button);

  expect(dispatch).toBeCalledWith({ payload: id, type: ACTION_TYPES.REMOVE });
});

test('Проверка чекбокса на выбранность', () => {
  //const checkedHandler = jest.fn();

  render(<ListItem id={id} title={title} isChecked={true} />);
  const checkbox = screen.getByTestId('checkbox');
  expect(checkbox).toBeInTheDocument();
  expect(checkbox).toHaveAttribute('checked');
});

test('Проверка чекбокса на пустоту', () => {
  //const checkedHandler = jest.fn();

  render(<ListItem id={id} title={title} isChecked={false} />);
  const checkbox = screen.getByTestId('checkbox');
  expect(checkbox).toBeInTheDocument();
  expect(checkbox).not.toHaveAttribute('checked');
});

test('Проверка на вызов метода', () => {
  const dispatch = jest.fn();

  render(<ListItem id={id} title={title} isChecked={false} dispatch={dispatch} />);
  const checkbox = screen.getByTestId('checkbox');
  expect(checkbox).toBeInTheDocument();

  expect(dispatch).not.toBeCalled();
  fireEvent.click(checkbox);
  expect(dispatch).toBeCalledWith({ payload: id, type: ACTION_TYPES.CHECKED });
});
