import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import List from './List';

const list = [
  {
    id: 0,
    title: 'Помыть посуду'
  },
  {
    id: 1,
    title: 'Полить цветы'
  },
  {
    id: 2,
    title: 'Сходить в магазин'
  },
  {
    id: 3,
    title: 'Помыть полы'
  }
];
const handleRemove = jest.fn();
const handleChecked = jest.fn();

test('Компонент выводит каждый элемент списка', () => {
  render(<List list={list} handleRemove={handleRemove} handleChecked={handleChecked} />);
  const elements = screen.getAllByTestId('task');
  expect(elements).toHaveLength(list.length);
  for (let i = 0; i < list.length; i++) {
    expect(elements[i]).toHaveTextContent(list[i].title);
  }
});

test('Кнопка в каждом элементе нажимается, при этом вызывается handleDelete с параметром id', () => {
  render(<List list={list} handleRemove={handleRemove} handleChecked={handleChecked} />);
  const buttons = screen.getAllByTestId('delete-button');
  for (let i = 0; i < list.length; i++) {
    expect(buttons[i]).toBeInTheDocument();
    expect(handleRemove).not.toBeCalledWith(list[i].id);
    fireEvent.click(buttons[i]);
    expect(handleRemove).toBeCalledWith(list[i].id);
  }
});

test('При отображении пустого списка выводится надпись "В списке нет элементов"', () => {
  const list2 = [];
  render(<List list={list2} handleRemove={handleRemove} handleChecked={handleChecked} />);
  const element = screen.getByTestId('list');
  expect(element).toHaveTextContent('Нет дел в списке');
});

test('Чекбокс в каждом элементе прокликивается, при этом вызывается handleChecked с параметром id', () => {
  render(<List list={list} handleRemove={handleRemove} handleChecked={handleChecked} />);
  const checkboxes = screen.getAllByTestId('checkbox');
  for (let i = 0; i < list.length; i++) {
    expect(checkboxes[i]).toBeInTheDocument();
    expect(handleChecked).not.toBeCalledWith(list[i].id);
    fireEvent.click(checkboxes[i]);
    expect(handleChecked).toBeCalledWith(list[i].id);
  }
});
