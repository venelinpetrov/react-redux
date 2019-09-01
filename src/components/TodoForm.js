import React from 'react';

const TodoForm = props => {
    const { currentTodo, changeCurrent } = props;
    const handleInputChange = e => {
        const val = e.target.value;
        changeCurrent(val);
    };

    return (
        <form>
            <input value={currentTodo} onChange={handleInputChange}/>
        </form>
    );
};

export default TodoForm;