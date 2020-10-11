import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border-radius: 5px;
  background: orange;
  color: white;
  border: solid 1px white;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 18px 10px;
  width: 180px;
  margin: 10px;
  outline: none;
  &:hover {
    transition: all 0.5s ease-in-out;
    background: white;
    border: solid 1px white;
    color: orange;
  }
`;

const Button = (props) => {
  return <StyledButton onClick={props.action}>{props.buttonName}</StyledButton>;
};

export default Button;
