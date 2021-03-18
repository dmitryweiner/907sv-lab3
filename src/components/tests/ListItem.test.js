import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ListItem from '../ListItem';

test('content viewing test', () => {
  const title = 'Item';
  const id = '1619';
  const deleteHandler = jest.fn();
  render(<ListItem title={title} id={id} deleteHandler={deleteHandler} />);
  expect(screen.getByText(title)).toBeInTheDocument();

  const button = screen.getByTestId('delete_button');
  expect(button).toBeInTheDocument();
  fireEvent.click(button);

  expect(deleteHandler).lastCalledWith(id);
});

test('checkbox isChecked test', () => {
  //const checkedHandler = jest.fn();
  const id = '123';
  const title = '123';
  render(<ListItem id={id} title={title} isChecked={true} />);
  const checkbox = screen.getByTestId('checkbox');
  expect(checkbox).toBeInTheDocument();
  expect(checkbox).toHaveAttribute('checked');
});

test('empty checkbox test', () => {
  const id = '123';
  const title = '123';
  render(<ListItem id={id} title={title} isChecked={false} />);
  const checkbox = screen.getByTestId('checkbox');
  expect(checkbox).toBeInTheDocument();
  expect(checkbox).not.toHaveAttribute('checked');
});

test('checkedHandler test', () => {
  const checkedHandler = jest.fn();
  const id = '123';
  const title = '123';
  render(<ListItem id={id} title={title} isChecked={false} checkHandler={checkedHandler} />);
  const checkbox = screen.getByTestId('checkbox');
  expect(checkbox).toBeInTheDocument();

  expect(checkedHandler).not.toBeCalled();
  fireEvent.click(checkbox);
  expect(checkedHandler);
});
