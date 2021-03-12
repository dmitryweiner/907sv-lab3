import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render App', () => {
  render(<App />);
  const text = screen.getByText(/Лабораторная №3 по теме Фильтруемый список в React/i);
  expect(text).toBeInTheDocument();
});
