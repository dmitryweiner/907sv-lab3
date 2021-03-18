import ListItem from './ListItem';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
const deleteHandler = jest.fn();
const checkHandler = jest.fn();
const listItemTitle = "I'm title";
const listItemId = "I'm ListItem Id";

describe(' Тесты ListItem ', () => {
  test(' Отображение title ', () => {
    render(<ListItem title={listItemTitle} />);
    expect(screen.getByText(listItemTitle)).toBeInTheDocument();
  });
  test(' Отображение кнопки, вызов handleClick с id ', () => {
    render(<ListItem id={listItemId} deleteHandler={deleteHandler} />);
    const button = screen.getByTestId('delete-button');
    expect(button).toBeInTheDocument();
    expect(deleteHandler).not.toBeCalled();
    fireEvent.click(button);
    expect(deleteHandler).toBeCalledWith(listItemId);
  });
  test(' Отображение выбранного checkbox ', () => {
    render(<ListItem id={listItemId} isChecked={true} />);
    const firstCheckbox = screen.getByTestId('checkbox');
    expect(firstCheckbox).toBeInTheDocument();
    expect(firstCheckbox).toHaveAttribute('checked');
  });
  test(' Отображение не выбранного checkbox ', () => {
    render(<ListItem id={listItemId} isChecked={false} />);
    const secondCheckbox = screen.getByTestId('checkbox');
    expect(secondCheckbox).toBeInTheDocument();
    expect(secondCheckbox).not.toHaveAttribute('checked');
  });
  test(' Checkbox, вызов handleChecked с id ', () => {
    render(<ListItem id={listItemId} isChecked={false} checkHandler={checkHandler} />);
    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkHandler).not.toBeCalled();
    fireEvent.click(checkbox);
    expect(checkHandler).toBeCalledWith(listItemId, true);
  });
});
