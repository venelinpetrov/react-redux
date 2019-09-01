import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const state = {
    todos: [
        {
            id: 1, text: 'todo1', isComplete: false
        },
        {
            id: 2, text: 'todo2', isComplete: true
        }
    ]
}
ReactDOM.render(<App todos={state.todos}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
