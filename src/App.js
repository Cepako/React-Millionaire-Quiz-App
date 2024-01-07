import React from 'react';

import Stage from './components/Stage';
import Sidebar from './components/Sidebar';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Stage />
      <Sidebar />
    </div>
  );
};

export default App;
