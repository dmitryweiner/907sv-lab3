import { reducer, ACTION_TYPES } from './store';

test('При вызове редьюсера с экшеном add возвращается состояние стора, в котором добавлен новый элемент', () => {
  const field = 'field';
  const add = {
    type: ACTION_TYPES.ADD,
    payload: field
  };
  const list = reducer(add, []);
  expect(list.length).toEqual(1);
  expect(list[0].title).toEqual(field);
});

test('При вызове редьюсера с экшеном delete возвращается состояние стора, в котором удалён указанный элемент', () => {
  const id = 1;
  const array = [
    {
      id: 0,
      title: 'Помыть посуду',
      isChecked: false
    },
    {
      id: 1,
      title: 'Полить цветы',
      isChecked: false
    },
    {
      id: 2,
      title: 'Покормить кота',
      isChecked: false
    }
  ];
  const remove = {
    type: ACTION_TYPES.REMOVE,
    payload: id
  };
  const list = reducer(remove, array);
  expect(list.length).toEqual(2);
  for (let i = 0; i < list.length; i++) {
    expect(list[i].id).not.toBe(1);
    expect(list[i].title).not.toBe('Полить цветы');
  }
});

test('При вызове редьюсера с экшеном check возвращается состояние стора, в котором состояние указанного элемента изменено', () => {
  const id = 0;
  const array = [
    {
      id: 0,
      title: 'Помыть посуду',
      isChecked: false
    },
    {
      id: 1,
      title: 'Полить цветы',
      isChecked: false
    }
  ];
  const check = {
    type: ACTION_TYPES.CHECK,
    payload: id
  };
  const list = reducer(check, array);
  expect(list[0].isChecked).toEqual(true);
});
