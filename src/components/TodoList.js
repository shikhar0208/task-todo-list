import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions/actions';
import AddTodo from '../containers/AddTodo';
import Todo from './Todo';
import '../styles/TodoList.css';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  const todo = todos.map((todo) => (
    <Todo
      key={todo.id}
      text={todo.text}
      completed={todo.completed}
      onClick={() => toggleTodo(todo.id)}
      removeTodo={() => deleteTodo(todo.id)}
    />
  ));

  return (
    <div className='TodoList'>
      <h1>
        Todo List! <span>A Simple Todo List App.</span>
      </h1>
      <ul>{todo}</ul>
      <AddTodo />
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
  deleteTodo: (id) => dispatch(deleteTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
