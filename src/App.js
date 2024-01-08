import React, { useState } from 'react';

import Stage from './components/Stage';
import Sidebar from './components/Sidebar';
import StartPage from './components/StartPage';

import './App.scss';

const App = () => {
  const [viewStage, setViewStage] = useState(false);
  const [name, setName] = useState('');

  return (
    <div className="App">
      {viewStage ? (
        <>
          <Stage />
          <Sidebar name={name} />
        </>
      ) : (
        <StartPage setViewStage={setViewStage} setName={setName} name={name} />
      )}
    </div>
  );
};

export default App;
