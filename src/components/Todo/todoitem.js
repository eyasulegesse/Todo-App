import React from 'react';
const TodoItem = (props) => {
  return (
    <li>
      <h2>{props.name}</h2>
      <p>{props.todo}</p>
      <p>{props.endDate}</p>
    </li>
  );
};
export default TodoItem;
