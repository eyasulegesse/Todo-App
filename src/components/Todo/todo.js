import React, { Fragment, useState } from 'react';
import NewTodo from './newtodo';
import TodoList from './todolist';
const Todo = () => {
  const [todoItem, setTodoItem] = useState([]);
  const addTodoHandler = (uname, todo, endDate) => {
    console.log(uname, todo, endDate);

    setTodoItem((prevTodo) => {
      return [...prevTodo, { name: uname, todo: todo, endDate: endDate }];
    });
  };
  return (
    <Fragment>
      <NewTodo onAdd={addTodoHandler} />
      <TodoList todoitem={todoItem} />
    </Fragment>
  );
};
export default Todo;
