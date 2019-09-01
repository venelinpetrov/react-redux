const initialState = {
    todos: [
        {
            id: 1, text: 'todo1', isComplete: false
        },
        {
            id: 2, text: 'todo2', isComplete: true
        }
    ],
    currentTodo: ''
};

export const updateCurrent = val => ({
    type: 'CURRENT_UPDATE',
    payload: val
});

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TODO_ADD':
            return {...state, todos: state.todos.concat(action.payload)};
        case 'CURRENT_UPDATE':
            return {...state, currentTodo: action.payload}
        default:
            return state;
    }
};

export default todoReducer;