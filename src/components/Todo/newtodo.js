import React, { Fragment, useState } from 'react';
import Button from '../UI/button';
import Card from '../UI/card';
import SuccessModal from '../UI/succesModal';
import classes from './newtodo.module.css';
const NewTodo = (props) => {
  const [name, setName] = useState();
  const [todo, setTodo] = useState();
  const [endDate, setEndDate] = useState();
  const [error, setError] = useState(false);

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const todoChangeHandler = (event) => {
    setTodo(event.target.value);
  };
  const endDateChangeHandler = (event) => {
    setEndDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.onAdd(name, todo, endDate);
    setName('');
    setTodo('');
    setEndDate('');
    setError({
      title: 'Success',
      message: `${name} your Todo is Saved Successfully`,
    });
  };
  const closeHandler = (event) => {
    setError(null);
  };
  return (
    <Fragment>
      {error && (
        <SuccessModal
          title={error.title}
          message={error.message}
          onClose={closeHandler}
        />
      )}
      <Card className={classes.form}>
        <form onSubmit={submitHandler}>
          <label>Name</label>
          <input type='text' value={name} onChange={nameChangeHandler} />
          <label>Todo</label>
          <input type='text' value={todo} onChange={todoChangeHandler} />
          <label>End Date</label>
          <input type='date' value={endDate} onChange={endDateChangeHandler} />
          <div className={classes.actions}>
            <Button type='submit'>Add Todo</Button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};
export default NewTodo;
