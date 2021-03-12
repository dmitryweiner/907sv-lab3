import { ACTION_TYPE, ADD, REMOVE, REMOVELIST, CHECKED } from './store/types';
import { reducer } from './store/store';
import { ItemI } from './store/interfaces/itemInterface';
import { ListI } from './store/interfaces/listInterface';

const title = 'item';

const newItem: ItemI = {
  index: 'index',
  value: title,
  isChecked: false
};

let state: ListI = {
  items: []
};

test('add item', () => {
  let state: ListI = {
    items: []
  };

  const action: ACTION_TYPE = {
    type: ADD,
    payload: newItem
  };

  state = reducer(action, state);
  expect(state.items.length).toEqual(1);
  expect(state.items[0]).toHaveProperty('index');
  expect(state.items[0].value).toEqual(title);

  state.items = [];
});

test('remove item', () => {
  const addAction: ACTION_TYPE = {
    type: ADD,
    payload: newItem
  };

  state = reducer(addAction, state);

  const removeAction: ACTION_TYPE = {
    type: REMOVE,
    payload: state.items[0].index
  };

  state = reducer(removeAction, state);
  expect(state.items).toHaveLength(0);
});

test('remove list', () => {
  const addAction: ACTION_TYPE = {
    type: ADD,
    payload: newItem
  };

  state = reducer(addAction, state);
  state = reducer(addAction, state);

  const removeList: ACTION_TYPE = {
    type: REMOVELIST
  };

  state = reducer(removeList);
  expect(state.items).toHaveLength(0);
});

test('checked item', () => {
  const addAction: ACTION_TYPE = {
    type: ADD,
    payload: newItem
  };

  state = reducer(addAction, state);

  const checkedAction: ACTION_TYPE = {
    type: CHECKED,
    payload: state.items[0].index
  };

  state = reducer(checkedAction, state);

  expect(state.items[0].isChecked).toBeTruthy();
});
