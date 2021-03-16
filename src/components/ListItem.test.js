import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ListItem from './ListItem';

const id = '123';
const title = '123';

test('Проверка на отражение содержимого', () => {
  const title = 'task';
  const id = '123';
  const deleteHandler = jest.fn();
  render(<ListItem title={title} id={id} deleteHandler={deleteHandler} />);
  expect(screen.getByText(title)).toBeInTheDocument();

  const button = screen.getByTestId('delete_button');
  expect(button).toBeInTheDocument();
  fireEvent.click(button);

  expect(deleteHandler).lastCalledWith(id);
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
  const checkedHandler = jest.fn();

  render(<ListItem id={id} title={title} isChecked={false} checkedHandler={checkedHandler} />);
  const checkbox = screen.getByTestId('checkbox');
  expect(checkbox).toBeInTheDocument();

  expect(checkedHandler).not.toBeCalled();
  fireEvent.click(checkbox);
  expect(checkedHandler).toBeCalledWith(id, true);
});

test('Проверка edit button', () => {
  const text = 'text';
  const editHandler = jest.fn();
  render(<ListItem id={id} title={title} editHandler={editHandler} />);

  const editButton = screen.getByTestId('edit-button');
  fireEvent.click(editButton);

  const input = screen.getByTestId('edit-input');
  fireEvent.input(input, { target: { value: text } });

  const saveButton = screen.getByTestId('save-button');
  fireEvent.click(saveButton);

  expect(editHandler).toBeCalledWith(text);
});
