import reducer, { ACTION_TYPES, filteredList } from './store';

const title = 'По';

describe('Проверка  store.js', () => {
  test('Проверка (ACTION_TYPES.ADD)', () => {
    const action = {
      type: ACTION_TYPES.ADD,
      payload: title
    };

    const newList = reducer(action, []);

    expect(newList.length).toEqual(1);
    expect(newList[0]).toHaveProperty('id');
    expect(newList[0].title).toEqual(title);
  });

  test('Проверка удаления элемента (ACTION_TYPES.REMOVE)', () => {
    const addAction = {
      type: ACTION_TYPES.ADD,
      payload: title
    };

    let list = reducer(addAction, []);

    const removeAction = {
      type: ACTION_TYPES.REMOVE,
      payload: list[0].id
    };

    list = reducer(removeAction, list);
    expect(list.length).toEqual(0);
  });

  test('Проверка  (ACTION_TYPES.CHECKED)', () => {
    const addAction = {
      type: ACTION_TYPES.ADD,
      payload: title
    };

    let list = reducer(addAction, []);

    const checkedAction = {
      type: ACTION_TYPES.CHECKED,
      payload: list[0].id
    };

    list = reducer(checkedAction, list);
    expect(list[0].isChecked).toBeTruthy();
  });

  test('Проверка фильтра', () => {
    const addAction = {
      type: ACTION_TYPES.ADD,
      payload: 'Покормить пса'
    };
    let list = reducer(addAction, []);
    list = reducer(addAction, list);

    const checkedAction = {
      type: ACTION_TYPES.CHECKED,
      payload: list[1].id
    };
    list = reducer(checkedAction, list);

    const filList = filteredList({ list: list, isDone: true });
    expect(filList.length).toEqual(1);
    expect(filList[0].id).toEqual(list[1].id);
  });
});
