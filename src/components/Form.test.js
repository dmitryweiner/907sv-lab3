import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';

test('Проверка формы', () => {
  const text = '123';
  const handleSubmit = jest.fn();

  render(<Form handleSubmit={handleSubmit} />);

  fireEvent.input(screen.getByTestId('input'), {
    target: {
      value: text
    }
  });

  expect(handleSubmit).not.toBeCalled();
  fireEvent.submit(screen.getByTestId('form'));
  expect(handleSubmit).toBeCalledWith(text);
  expect(screen.getByTestId('input')).toHaveValue('');
});

test('Проверка валидации', () => {
  const value = '';
  const handleSubmit = jest.fn();
  render(<Form handleSubmit={handleSubmit} />);
  const input = screen.getByTestId('input');
  fireEvent.input(input, {
    target: {
      value: value
    }
  });
  expect(handleSubmit).not.toBeCalled();
  const form = screen.getByTestId('form');
  fireEvent.submit(form);
  expect(handleSubmit).not.toBeCalled();
  expect(screen.getByText('Пустая задача')).toBeInTheDocument();
});
