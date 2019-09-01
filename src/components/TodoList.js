import React from 'react';

const TodoList = props => (
    <ul>
        {props.todos.map(todo => {
            return (
                <li key={todo.id}>
                    <input type="checkbox" defaultChecked={todo.isComplete} />
                    <span>{todo.text}</span>
                </li>
            )
        })}
    </ul>
);

export default TodoList;