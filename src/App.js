import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App(props) {
  return (
    <div className="todo-app">
      <TodoForm />
      <TodoList todos={props.todos} />
    </div>
  );
}

export default App;
