import { ListI } from './interfaces/listInterface';
import { ACTION_TYPE, ADD, CHECKED, EDIT, FILTER, REMOVE, REMOVELIST, SEARCH } from './types';
import { ItemI } from './interfaces/itemInterface';

export const initialState: ListI = {
  items: [],
  filter: 'All',
  search: ''
};

export function reducer(action: ACTION_TYPE, prevState: ListI = initialState): ListI {
  switch (action.type) {
    case ADD: {
      return {
        ...prevState,
        items: [...prevState.items, action.payload]
      };
    }
    case REMOVE: {
      return {
        ...prevState,
        items: [...prevState.items.filter(item => item.index !== action.payload)]
      };
    }
    case CHECKED: {
      return {
        ...prevState,
        items: [
          ...prevState.items.map(item => {
            if (item.index === action.payload) {
              return { ...item, isChecked: !item.isChecked };
            }
            return item;
          })
        ]
      };
    }
    case REMOVELIST: {
      let remove = confirm('Очистить список ?');
      if (remove) {
        return initialState;
      } else {
        return prevState;
      }
    }
    case EDIT: {
      return {
        ...prevState,
        items: [
          ...prevState.items.map(item => {
            if (item.index === action.payload.index) {
              return { ...item, value: action.payload.newValue };
            } else {
              return item;
            }
          })
        ]
      };
    }
    case FILTER: {
      return { ...prevState, filter: action.payload };
    }
    case SEARCH: {
      return { ...prevState, search: action.payload };
    }
    default:
      return prevState;
  }
}

export function selectFilteredItems(state: ListI) {
  switch (state.filter) {
    case 'All': {
      return state.items;
    }
    case 'Completed': {
      return state.items.filter(element => element.isChecked);
    }
    case 'NotCompleted': {
      return state.items.filter(element => !element.isChecked);
    }
    default: {
      return state.items;
    }
  }
}

export function searchItems(state: ItemI[], search: string) {
  if (search === '') return state;

  return state.filter(item => item.value.toUpperCase().indexOf(search.toUpperCase()) != -1);
}
