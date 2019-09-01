import React from 'react';

const TodoItem = ({ text, isComplete }) => (
    <li>
        <input type="checkbox" defaultChecked={isComplete} />
        <span>{text}</span>
    </li>
);

const TodoList = props => (
    <ul>
        {props.todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
    </ul>
);

export default TodoList;