import reducer, { ACTION_TYPES } from './store';

const text = 'Hohol';

test('Addition', () => {
    const addAction = {
        type: ACTION_TYPES.ADD,
        payload: text
    };
    const state = reducer(addAction, []);
    expect(state.length).toEqual(1);
    expect(state[0]).toHaveProperty('index');
    expect(state[0].text).toEqual(text);
});

test('Delete', () => {
    const addAction = {
        type: ACTION_TYPES.ADD,
        payload: text
    };
    let state = reducer(addAction, []);

    const removeAction = {
        type: ACTION_TYPES.DELETE,
        payload: state[0].index
    };
    state = reducer(removeAction, state);
    expect(state).toHaveLength(0);
});

test('Check', () => {
    const addAction = {
        type: ACTION_TYPES.ADD,
        payload: text
    };
    let state = reducer(addAction, []);

    const checkedAction = {
        type: ACTION_TYPES.CHECKING,
        payload: state[0].index
    };
    state = reducer(checkedAction, state);
    expect(state[0].isChecked).toBeTruthy();
});
