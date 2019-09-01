import reducer from './todo';

describe('Todo reducer', () => {
    test('returns object', () => {
        const startState = {
            todos: []
        };

        const expectedState = {
            todos: [
                {id: 1, text: 'todo1', isCompleted: false }
            ]
        };

        const action = {
            type: 'TODO_ADD', payload: { id: 1, text: 'todo1', isCompleted: false }
        };

        const result = reducer(startState, action);

        expect(result).toEqual(expectedState);
    });
});