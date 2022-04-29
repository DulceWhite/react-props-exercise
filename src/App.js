import React from 'react';

import Exercise from './exercise/Exercise';

import './App.css';

function App() {
  return (
    <div className="App" >
      <Exercise />
      <Exercise good="Awesome" bad="Terrible"  />
    </div>
  );
}

export default App;
