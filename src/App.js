import React from 'react';
import Ball from './Ball';
import Lottery from './Lottery';
import './App.css';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title={'Power Ball'} maxBalls={4} />
    </div>
  );
}

export default App;
