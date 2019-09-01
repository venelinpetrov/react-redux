import React from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = state => state;
const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;
