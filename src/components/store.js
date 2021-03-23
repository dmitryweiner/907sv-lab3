export const ACTION_TYPES = {
  ADD: 'add',
  REMOVE: 'remove',
  CHECKED: 'checked'
};

export default function reducer(action, prevList = []) {
  switch (action.type) {
    case ACTION_TYPES.ADD: {
      const newElement = {
        id: Math.random().toString(36).substr(2),
        title: action.payload,
        isChecked: false
      };
      return [...prevList, newElement];
    }
    case ACTION_TYPES.REMOVE: {
      return [...prevList.filter(item => item.id !== action.payload)];
    }
    case ACTION_TYPES.CHECKED: {
      return [
        ...prevList.map(function (item) {
          if (item.id === action.payload) {
            return { ...item, isChecked: !item.isChecked };
          }
          return item;
        })
      ];
    }
  }
}

export function filteredList({ list, isDone }) {
  if (!isDone) return list;

  return list.filter(item => item.isChecked);
}
