import { reducer, ACTION_TYPES } from './store';

test('При вызове редьюсера с экшеном add возвращается состояние стора, в котором добавлен новый элемент', () => {
  const action = ACTION_TYPES.ADD;
  const list = reducer(action, []);
  expect(list.length).toEqual(1);
});

test('При вызове редьюсера с экшеном delete возвращается состояние стора, в котором удалён указанный элемент', () => {
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
  const action = ACTION_TYPES.DELETE;
  const list = reducer(action, array);
  expect(list.length).toEqual(1);
});
