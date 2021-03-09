import { ACTION_TYPES, reducer } from './store';

const title = 'item';

test('add item', () => {
  const action = {
    type: ACTION_TYPES.ADD,
    payload: title
  };

  const newState = reducer(action, []);
  expect(newState.length).toEqual(1);
  expect(newState[0]).toHaveProperty('index');
  expect(newState[0].value).toEqual(title);
});

test('remove item', () => {
  const addAction = {
    type: ACTION_TYPES.ADD,
    payload: title
  };

  let newState = reducer(addAction, []);

  const removeAction = {
    type: ACTION_TYPES.REMOVE,
    payload: newState[0].index
  };

  newState = reducer(removeAction, newState);
  expect(newState).toHaveLength(0);
});

test('remove list', () => {
  const addAction = {
    type: ACTION_TYPES.ADD,
    payload: title
  };

  let newState = reducer(addAction, []);
  newState = reducer(addAction, newState);

  const removeList = {
    type: ACTION_TYPES.REMOVELIST
  };

  newState = reducer(removeList);
  expect(newState).toHaveLength(0);
});

test('checked item', () => {
  const addAction = {
    type: ACTION_TYPES.ADD,
    payload: title
  };

  let state = reducer(addAction, []);

  const checkedAction = {
    type: ACTION_TYPES.CHECKED,
    payload: state[0].index
  };

  state = reducer(checkedAction, state);

  expect(state[0].isChecked).toBeTruthy();
});
