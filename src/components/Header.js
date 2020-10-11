import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  text-transform: uppercase;
  font-size: 2.6rem;
  font-weight: 100;s
`;

const Header = () => {
  return <Title>React Stopwatch</Title>;
};

export default Header;
