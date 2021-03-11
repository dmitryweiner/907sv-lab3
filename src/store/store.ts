import { ListI } from './interfaces/listInterface';
import { ACTION_TYPE } from './types';

const initialState: ListI = {
  items: []
};

export function reducer(action: ACTION_TYPE, prevState: ListI = initialState): ListI {
  switch (action.type) {
    case 'Add': {
      return {
        ...prevState,
        items: [...prevState.items, action.payload]
      };
    }
    case 'Remove': {
      return {
        ...prevState,
        items: [...prevState.items.filter(item => item.index !== action.payload)]
      };
    }
    case 'Checked': {
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
    case 'RemoveList': {
      let remove = confirm('Очистить список ?');
      if (remove) {
        return initialState;
      } else {
        return prevState;
      }
    }
    case 'Edit': {
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
    default:
      return prevState;
  }
}
