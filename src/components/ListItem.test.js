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

  render(<ListItem id={id} title={title} isChecked={false} checkHandler={checkedHandler} />);
  const checkbox = screen.getByTestId('checkbox');
  expect(checkbox).toBeInTheDocument();

  expect(checkedHandler).not.toBeCalled();
  fireEvent.click(checkbox);
  expect(checkedHandler);
});
