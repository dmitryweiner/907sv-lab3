import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ListItem from './ListItem';

const task = 'Принять таблетки';
const id = 1;
const handleRemove = jest.fn();
const handleChecked = jest.fn();
const checked = false;

test('Отображает на экране то, что передали в пропсе title', () => {
  render(
    <ListItem
      title={task}
      id={id}
      handleRemove={handleRemove}
      isChecked={checked}
      handleChecked={handleChecked}
    />
  );
  const element = screen.getByTestId('task');
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent(task);
  screen.getByText(content => content.startsWith('таблетки', 8));
});

test('При нажатии на кнопку должен вызываться переданный в пропсах коллбэк handleRemove с параметром id', () => {
  render(
    <ListItem
      title={task}
      id={id}
      handleRemove={handleRemove}
      isChecked={checked}
      handleChecked={handleChecked}
    />
  );
  const button = screen.getByTestId('delete-button');
  expect(button).toBeInTheDocument();
  expect(handleRemove).not.toBeCalled();
  fireEvent.click(button);
  expect(handleRemove).toBeCalledWith(id);
});

test('Должен показывать на экране чекбокс', () => {
  render(
    <ListItem
      title={task}
      id={id}
      handleRemove={handleRemove}
      isChecked={checked}
      handleChecked={handleChecked}
    />
  );
  const checkbox = screen.getByTestId('checkbox');
  expect(checkbox).toBeInTheDocument();
  expect(checkbox).toBeVisible();
});

test('Состояние чекбокса зависит от переданного пропса checked.', () => {
  render(
    <ListItem
      title={task}
      id={id}
      handleRemove={handleRemove}
      isChecked={checked}
      handleChecked={handleChecked}
    />
  );
  const checkbox = screen.getByTestId('checkbox');
  expect(checkbox.checked).toEqual(checked);
});

test('При клике на чекбокс должен вызываться коллбэк handleChecked с параметром id', () => {
  render(
    <ListItem
      title={task}
      id={id}
      handleRemove={handleRemove}
      isChecked={checked}
      handleChecked={handleChecked}
    />
  );
  const checkbox = screen.getByTestId('checkbox');
  expect(checkbox).toBeInTheDocument();
  expect(handleChecked).not.toBeCalled();
  fireEvent.click(checkbox);
  expect(handleChecked).toBeCalledWith(id);
});
