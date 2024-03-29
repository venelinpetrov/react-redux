import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { updateCurrent } from './reducers/todo';

const App = props => {
    return (
        <div className="todo-app">
            <TodoForm
                changeCurrent={props.updateCurrent}
                currentTodo={props.currentTodo}
            />
            <TodoList todos={props.todos} />
        </div>
    );
}


export default connect(
    state => state,
    { updateCurrent }
)(App);
