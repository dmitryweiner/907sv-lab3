export const ACTION_TYPES = {
  ADD: 'add',
  REMOVE: 'remove',
  CHECK: 'check'
};

export const initialState = [];

export function reducer(action, prevState = initialState) {
  switch (action.type) {
    case ACTION_TYPES.REMOVE: {
      return [...prevState.filter(item => item.id !== action.payload)];
    }
    case ACTION_TYPES.ADD: {
      const newTask = {
        id: Math.random().toString(36).substr(2),
        title: action.payload,
        isChecked: false
      };
      return [...prevState, newTask];
    }
    case ACTION_TYPES.CHECK: {
      for (let i = 0; i < prevState.length; i++) {
        if (prevState[i].id === action.payload) {
          prevState[i].isChecked = !prevState[i].isChecked;
        }
      }
      return [...prevState];
    }
    default:
      return [...prevState];
  }
}

export function selectFilteredList({ list, isFiltered }) {
  if (isFiltered) {
    return list.filter(element => element.isChecked);
  }
  return list;
}
