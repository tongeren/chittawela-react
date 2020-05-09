import React from 'react';
import NavBar from './components/NavBar/NavBar';
import json from './app.json';
import './App.scss';

const App = () => {
  return (
    <div>
      <NavBar { ...json.navbar } />
    </div>
  );
}

export default App;
