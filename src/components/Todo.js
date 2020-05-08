import React from 'react';
import '../styles/Todo.css';

const Todo = ({ onClick, completed, text, removeTodo }) => {
  return (
    <div className='Todo'>
      <li
        onClick={onClick}
        className={completed ? 'Todo-task completed' : 'Todo-task'}
      >
        {text}
      </li>
      <div className='Todo-buttons'>
        <button className='Todo-buttons' onClick={removeTodo}>
          <i className='fas fa-trash' />
        </button>
      </div>
    </div>
  );
};

export default Todo;
