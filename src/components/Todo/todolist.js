import React from 'react';
import Card from '../UI/card';
import TodoItem from './todoitem';
import classes from './todolist.module.css';

const TodoList = (props) => {
  console.log(props.todoitem.name);
  return (
    <Card className={classes.list}>
      <ul>
        {props.todoitem.map((item) => (
          <TodoItem name={item.name} todo={item.todo} endDate={item.endDate} />
        ))}
      </ul>
    </Card>
  );
};
export default TodoList;
