import React from 'react';

const Button = (props) => {
  return <button onClick={props.action}>{props.buttonName}</button>;
};

export default Button;
