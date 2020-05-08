import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';
import '../styles/NewTodoForm.css';

const AddTodo = ({ dispatch }) => {
  let input;
  return (
    <form
      className='NewTodoForm'
      onSubmit={(e) => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addTodo(input.value));
        input.value = '';
      }}
    >
      <label htmlFor='task'>New Todo</label>
      <input type='text' ref={(ele) => (input = ele)} placeholder='New Todo' />
      <button type='submit'>ADD TODO</button>
    </form>
  );
};

export default connect()(AddTodo);
