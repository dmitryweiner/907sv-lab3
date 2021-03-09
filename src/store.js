export const ACTION_TYPES = {
  ADD: 'add',
  REMOVE: 'remove',
  REMOVELIST: 'removeList',
  CHECKED: 'checked',
  EDIT: 'edit'
};

export function reducer(action, prevList = []) {
  switch (action.type) {
    case ACTION_TYPES.ADD: {
      const newValue = {
        index: Math.random().toString(36).substr(2),
        value: action.payload,
        isChecked: false
      };
      return [...prevList, newValue];
    }

    case ACTION_TYPES.REMOVE: {
      return [...prevList.filter(item => item.index !== action.payload)];
    }

    case ACTION_TYPES.REMOVELIST: {
      let remove = confirm('Очистить список ?');
      if (remove) {
        return [];
      } else {
        return prevList;
      }
    }

    case ACTION_TYPES.CHECKED: {
      return [
        ...prevList.map(item => {
          if (item.index === action.payload) {
            return { ...item, isChecked: !item.isChecked };
          }
          return item;
        })
      ];
    }

    case ACTION_TYPES.EDIT: {
      let newItemValue = prompt('Редактирование записи');
      return [
        ...prevList.map(item => {
          if (item.index === action.payload) {
            return { ...item, value: newItemValue };
          }
          return item;
        })
      ];
    }
  }
}
