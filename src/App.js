import React, { useRef } from 'react';
import { Reset } from 'styled-reset';
import Header from './components/Header';
import Button from './components/Button';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 800px;
  margin: 0 auto;
  padding-top: 30px;
  text-align: center;
`;

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: orange;
  color: white;
  font-family: 'Roboto', sans-serif;
`;

const Timer = styled.p`
  font-size: 2rem;
  font-weight: 100;
  margin-top: 30px;
  margin-bottom: 30px;
`;

function App() {
  let seconds = 0;
  let tens = 0;
  let appendTens = useRef(null);
  let appendSeconds = useRef(null);
  // let appendTens = document.getElementById('tens');
  // let appendSeconds = document.getElementById('seconds');
  let interval;
  const buttonStart = () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  };
  const buttonStop = () => {
    clearInterval(interval);
  };
  const buttonClear = () => {
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    appendTens.current.innerHTML = tens;
    appendSeconds.current.innerHTML = seconds;
  };
  const startTimer = () => {
    tens++;
    if (tens < 9) appendTens.current.innerHTML = '0' + tens;
    if (tens > 9) appendTens.current.innerHTML = tens;
    if (tens > 99) {
      seconds++;
      appendSeconds.current.innerHTML = '0' + seconds;
      tens = 0;
      appendTens.current.innerHTML = '0' + tens;
    }
    if (seconds > 9) {
      appendSeconds.current.innerHTML = seconds;
    }
  };
  return (
    <Body>
      <Wrapper>
        <Reset />
        <Header />
        <Timer>
          <span id='seconds' ref={appendSeconds}>
            00
          </span>
          :
          <span id='tens' ref={appendTens}>
            00
          </span>
        </Timer>
        <Button buttonName='Start Timer' action={buttonStart} />
        <Button buttonName='Stop Timer' action={buttonStop} />
        <Button buttonName='Clear Timer' action={buttonClear} />
      </Wrapper>
    </Body>
  );
}

export default App;
