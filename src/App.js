import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App(props) {
  return (
    <div className="todo-app">
    <TodoForm
      changeCurrent={props.changeCurrent}
      currentTodo={props.currentTodo} />
      <TodoList todos={props.todos} />
    </div>
  );
}

export default App;
