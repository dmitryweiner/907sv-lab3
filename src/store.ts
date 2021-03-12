export enum ACTION_TYPES {
  ADD = 'add',
  REMOVE = 'remove',
  CHECK = 'check'
}

export interface IActionAdd {
  type: typeof ACTION_TYPES.ADD;
  payload: string;
}
export interface IActionRemove {
  type: typeof ACTION_TYPES.REMOVE;
  payload: string;
}
export interface IActionCheck {
  type: typeof ACTION_TYPES.CHECK;
  payload: string;
}

export interface Item {
  id: string;
  title: string;
  isChecked: boolean;
}

export type IAction = IActionAdd | IActionRemove | IActionCheck;

export interface List extends Array<Item> {}

export const reducer = function (state: List = [], action: IAction): List {
  switch (action.type) {
    case ACTION_TYPES.REMOVE: {
      return [...state.filter(Item => Item.id !== action.payload)];
    }
    case ACTION_TYPES.ADD: {
      const newTask = {
        id: Math.random().toString(36).substr(2),
        title: action.payload,
        isChecked: false
      };
      return [...state, newTask];
    }
    case ACTION_TYPES.CHECK: {
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === action.payload) {
          state[i].isChecked = !state[i].isChecked;
        }
      }
      return [...state];
    }
    default:
      return [...state];
  }
};

export function selectFilteredList({ list, isFiltered }: { list: List; isFiltered: boolean }) {
  if (isFiltered) {
    return list.filter(element => element.isChecked);
  }
  return list;
}
