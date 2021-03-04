import React from 'react';
import {fireEvent, render, screen} from "@testing-library/react";
import ItemTodoList from "./TodoItem";
import TodoList from "./TodoList";

test('List Item display content',() => {
    const index = '1';
    const item = 'Забыть спросить хохла';
    const removeHandle = jest.fn();

    render (<ItemTodoList item={item} index={index} remove={removeHandle}/>);
    expect(screen.getByText(item, {exact:false})).toBeInTheDocument();

    const removeButton = screen.getByTestId('item-delete');
    expect(removeButton).toBeInTheDocument();
    fireEvent.click(removeButton);

    expect(removeHandle).lastCalledWith(index);
})

test('List Item display selected checkbox ', () => {
    const index = '1';
    const item = 'Забыть спросить хохла';
    render(<ItemTodoList index={index} isChecked={true} item={item} />)

    const checker = screen.getByTestId('check');
    expect(checker).toBeInTheDocument();
    expect(checker).toHaveAttribute('checked');
})

test('List Item display empty checkbox ', () => {
    const index = '1';
    const item = 'Забыть спросить хохла';
    render(<ItemTodoList index={index} isChecked={false} item={item} />)

    const checker = screen.getByTestId('check');
    expect(checker).toBeInTheDocument();
    expect(checker).not.toHaveAttribute('checked');
})

/*
test('Элементы отображают чекбоксы в нужном состоянии', () => {
    render(<TodoList list={list} />);
    const checkboxes = screen.getAllByTestId('checkbox');
    for(let i = 0; i < checkboxes.length; i++) {
        expect(checkboxes[i].checked).toEqual(list[i].isChecked);
    }
});
*/

/*
test('List Item display checkbox with calling a function', () => {
    const index = '1';
    const item = 'Забыть спросить хохла';
    const checkHandle = jest.fn();
    <ItemTodoList index={index} item={item} checkHandle={checkHandle} />

    const checker = screen.getByTestId('check');
    expect(checker).toBeInTheDocument();
    expect(checkHandle).not.toBeCalled();

    fireEvent.click(checker);
    expect(checkHandle).toBeCalledWith(index)
})*/
