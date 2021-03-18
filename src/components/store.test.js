import reducer, { ACTION_TYPES } from './store';

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
});
