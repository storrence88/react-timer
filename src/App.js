import React from 'react';
import Header from './components/Header';
import Timer from './components/Timer';
import Button from './components/Button';

function App() {
  return (
    <div>
      <Header />
      <Timer />
      <div>
        <Button />
        <Button />
        <Button />
      </div>
    </div>
  );
}

export default App;
