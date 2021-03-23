export const ACTION_TYPES = {
    ADD: 'add',
    DELETE: 'delete',
    RECREATE: 'recreate',
    CHECKING: 'checking'
};

export const initState = [];

export default function reducer(action, prevState = initState) {
    switch (action.type) {
        case ACTION_TYPES.DELETE: {
            return [...prevState.filter(item => item.index !== action.payload)];
        }
        case ACTION_TYPES.ADD: {
            const newText = {
                index: Math.random().toString(36).substr(2),
                text: action.payload,
                isChecked: false
            };
            return [...prevState, newText];
        }
        case ACTION_TYPES.CHECKING: {
            return [
                ...prevState.map(function (item) {
                    if (item.index === action.payload) {
                        return { ...item, isChecked: !item.isChecked };
                    }
                    return item;
                })
            ];
        }
        default:
            return [...prevState];
    }
}

export function listFilter({ tasks, isChecked }) {
    if (!isChecked) return tasks;

    return tasks.filter(item => item.isChecked);
}
