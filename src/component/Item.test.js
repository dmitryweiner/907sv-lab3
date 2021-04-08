import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Item from './Item';

test('renders what it got', () => {
  const text = 'Test text';
  render(<Item text={text} />);
  const element = screen.getByTestId('component');
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent(text);
});
test('тест кнопки на удаление', () => {
  const index = 'title';
  const remove = jest.fn();
  render(<Item index={index} remove={remove} />);
  const element = screen.getByTestId('delete');
  expect(element).toBeInTheDocument();
  expect(remove).not.toBeCalled();
  fireEvent.click(element);
  expect(remove).toBeCalledWith(index);
});
test('тест чекбокса', () => {
  const index = 'title';
  const onChecked = jest.fn();
  const isCheck = true;
  render(<Item index={index} onChecked={onChecked} isCheck={isCheck} />);
  const element = screen.getByTestId('checkbox');
  expect(element.checked).toEqual(isCheck);
  expect(onChecked).not.toBeCalledWith(index);
  fireEvent.click(element);
  expect(onChecked).toBeCalledWith(index);
});
test('тест чекбокса', () => {
  const index = 'title';
  const onChecked = jest.fn();
  const isCheck = false;
  render(<Item index={index} onChecked={onChecked} isCheck={isCheck} />);
  const element = screen.getByTestId('checkbox');
  expect(element.checked).toEqual(isCheck);
  expect(onChecked).not.toBeCalledWith(index);
  fireEvent.click(element);
  expect(onChecked).toBeCalledWith(index);
});
