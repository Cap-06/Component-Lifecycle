import React from 'react';
import './App.css';
import TimerComponent from './TimerComponent';
import ScrollEventComponent from './ScrollEventComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TimerComponent />
        <ScrollEventComponent />
      </header>
    </div>
  );
}

export default App;
