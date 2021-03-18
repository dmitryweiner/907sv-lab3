import { reducer, ACTION_TYPES, initialState } from './store';

const array = [
  {
    id: '0',
    title: 'Помыть посуду',
    isChecked: false
  },
  {
    id: '1',
    title: 'Полить цветы',
    isChecked: false
  },
  {
    id: '2',
    title: 'Покормить кота',
    isChecked: false
  }
];

const state = {
  list: array,
  isFiltered: false
};

test('При вызове редьюсера с экшеном add возвращается состояние стора, в котором добавлен новый элемент', () => {
  const field = 'field';
  const add = {
    type: ACTION_TYPES.ADD,
    payload: field
  };
  const list = reducer(add, initialState);
  expect(list.list.length).toEqual(1);
  expect(list.list[0].title).toEqual(field);
});

test('При вызове редьюсера с экшеном delete возвращается состояние стора, в котором удалён указанный элемент', () => {
  const id = '1';
  const remove = {
    type: ACTION_TYPES.REMOVE,
    payload: id
  };
  const list = reducer(remove, state);
  expect(list.list.length).toEqual(2);
  for (let i = 0; i < list.list.length; i++) {
    expect(list.list[i].id).not.toBe('1');
    expect(list.list[i].title).not.toBe('Полить цветы');
  }
});

test('При вызове редьюсера с экшеном check возвращается состояние стора, в котором состояние указанного элемента изменено', () => {
  const id = '0';
  const check = {
    type: ACTION_TYPES.CHECK,
    payload: id
  };
  const list = reducer(check, state);
  expect(list.list[0].isChecked).toEqual(true);
});

test('При вызове редьюсера с экшеном filter возвращается состояние стора, в котором состояние isFiltered изменено', () => {
  const filter = {
    type: ACTION_TYPES.FILTER
  };
  const list = reducer(filter, state);
  expect(list.isFiltered).toBe(true);
});
