import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ItemTodoList from './TodoItem';
import TodoList from "../TodoList/TodoList";

test('List Item display content', () => {
    const index = '1';
    const text = 'Забыть спросить хохла';
    const removeHandle = jest.fn();

    render(<ItemTodoList text={text} index={index} remove={removeHandle} />);
    expect(screen.getByText(text, { exact: false })).toBeInTheDocument();

    const removeButton = screen.getByTestId('item-delete');
    expect(removeButton).toBeInTheDocument();
    fireEvent.click(removeButton);

    expect(removeHandle).lastCalledWith(index);
});

test('List Item display selected checkbox ', () => {
    const index = '1';
    const text = 'Забыть спросить хохла';
    render(<ItemTodoList index={index} isChecked={true} text={text} />);

    const checker = screen.getByTestId('check');
    expect(checker).toBeInTheDocument();
    expect(checker).toHaveAttribute('checked');
});


test('List Item display empty checkbox ', () => {
    const index = '1';
    const text = 'Забыть спросить хохла';
    render(<ItemTodoList index={index} isChecked={false} text={text} />);

    const checker = screen.getByTestId('check');
    expect(checker).toBeInTheDocument();
    expect(checker).not.toHaveAttribute('checked');
});

test('List Item display checkbox with calling a function', () => {
    const index = '1';
    const item = 'p';
    const checkHandle = jest.fn();
    render (<ItemTodoList index={index} item={item} checkHandle={checkHandle} />)

    const checker = screen.getByTestId('check');
    expect(checker).toBeInTheDocument();
    expect(checkHandle).not.toBeCalled();

    fireEvent.click(checker);
    expect(checkHandle).toBeCalledWith(index, true);
})