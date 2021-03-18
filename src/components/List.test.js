import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import List from './List';
import { ACTION_TYPES } from './store';

const list = [
  {
    id: 1,
    title: 'Task1',
    isChecked: true
  },
  {
    id: 2,
    title: 'Task2',
    isChecked: false
  }
];

test('Отображение непустого списка', () => {
  const dispatch = jest.fn();
  render(<List list={list} dispatch={dispatch} />);
  for (let item of list) {
    expect(screen.getByText(item.title)).toBeInTheDocument();
  }
  for (let button of screen.getAllByTestId('delete_button')) {
    fireEvent.click(button);
  }
  expect(dispatch).toBeCalledTimes(list.length);
});

test('Отображение элементов чекбокса в нужном состоянии', () => {
  render(<List list={list} />);
  const checkboxes = screen.getAllByTestId('checkbox');
  for (let i = 0; i < checkboxes.length; i++) {
    expect(checkboxes[i]).toHaveAttribute(list[i].isChecked ? 'checked' : 'type');
  }
});

test('Проверка на вызов checkHandler при клике на чекбокс', () => {
  const dispatch = jest.fn();
  render(<List list={list} dispatch={dispatch} />);
  const checkboxes = screen.getAllByTestId('checkbox');
  for (let i = 0; i < checkboxes.length; i++) {
    fireEvent.click(checkboxes[i]);
    expect(dispatch).toBeCalledWith({ type: ACTION_TYPES.CHECKED, payload: list[i].id });
  }
});
