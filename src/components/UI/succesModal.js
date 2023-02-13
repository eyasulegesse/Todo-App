import React, { Fragment } from 'react';
import Button from './button';
import Card from './card';
import classes from './succesModal.module.css';
const SuccessModal = (props) => {
  return (
    <Fragment>
      <div className={classes.backdrop} onClick={props.onClose} />
      <Card className={classes.modal}>
        <header>{props.title}</header>
        <div className={classes.message}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onClose}>Okay</Button>
        </footer>
      </Card>
    </Fragment>
  );
};

export default SuccessModal;
