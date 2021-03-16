import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

const tasks = [
    {
        index: '1',
        text: 'Example Text 1',
        isChecked: false
    },
    {
        index: '2',
        text: 'Example Text 2',
        isChecked: true
    },
    {
        index: '3',
        text: 'Example Text 3',
        isChecked: true
    },
    {
        index: '4',
        text: 'Example Text 4',
        isChecked: true
    }
];

test('TodoList Full Test', () => {
    render(<TodoList tasks={tasks} />);
    for (let item of tasks) {
        expect(screen.getByText(item.text)).toBeInTheDocument();
    }
});

test('TodoList Empty Test', () => {
    const tasks = [];
    render(<TodoList tasks={tasks} />);
    expect(screen.getByText('Tasks list is empty!')).toBeInTheDocument();
});

test('TodoList Checking Items', () => {
    const handleCheck = jest.fn();
    render(<TodoList tasks={tasks} checkHandle={handleCheck}/>)
    const cbs = screen.getAllByTestId('check');
    for (let i = 0; i < cbs.length; i++) {
        expect(cbs[i]).toHaveAttribute(tasks[i].isChecked ? 'checked' : 'type');
    }
})
