import React, { Fragment } from "react";

const Actions = ({ onIncrement, onDecrement }) => {
  return (
    <Fragment>
      <button onClick={onIncrement}>+</button> &nbsp;
      <button onClick={onDecrement}>-</button>
    </Fragment>
  );
};

export default Actions;
