import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';
const addHandler = jest.fn();

describe(' Тесты Form ', () => {
  test(' Отображение поля для ввода и кнопки для добавления ', () => {
    render(<Form />);
    const inputField = screen.getByPlaceholderText('Enter a deed');
    const addButton = screen.getByTestId("I'm addButton");
    expect(inputField).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });
  test(' Вызов handleClick с value введенным в поле ввода ', () => {
    const inputValueText = 'Praise the Cat';
    render(<Form addHandler={addHandler} />);
    const inputField = screen.getByPlaceholderText('Enter a deed');
    const addButton = screen.getByTestId("I'm addButton");
    fireEvent.input(inputField, {
      target: { value: inputValueText }
    });
    fireEvent.click(addButton);
    expect(addHandler).toBeCalledWith(inputValueText);
  });
  test(' Проверка на пустоту ', () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<Form addHandler={addHandler} />);
    const inputField = screen.getByPlaceholderText('Enter a deed');
    const addButton = screen.getByTestId("I'm addButton");
    fireEvent.input(inputField, {
      target: { value: '' }
    });
    fireEvent.click(addButton);
    expect(addHandler).not.toBeCalled();
  });
  test(' Отображение выбранного checkbox фильтра выполненности всех дел ', () => {
    render(<Form filterIsDone={true} />);
    const filterCheckbox = screen.getByTestId('filterCheckbox');
    expect(filterCheckbox).toBeInTheDocument();
    expect(filterCheckbox).toHaveAttribute('checked');
  });
  test(' Отображение не выбранного checkbox фильтра выполненности всех дел ', () => {
    render(<Form filterIsDone={false} />);
    const filterCheckbox = screen.getByTestId('filterCheckbox');
    expect(filterCheckbox).toBeInTheDocument();
    expect(filterCheckbox).not.toHaveAttribute('checked');
  });
  test(' Фильтр выполненности всех дел "работает" (filterHandler вызывается в нужном месте) ', () => {
    const filterHandler = jest.fn();
    render(<Form isFilterDone={false} filterHandler={filterHandler} />);
    const filterCheckbox = screen.getByTestId('filterCheckbox');
    expect(filterHandler).not.toBeCalled();
    fireEvent.click(filterCheckbox);
    expect(filterHandler).toBeCalled();
  });
});
