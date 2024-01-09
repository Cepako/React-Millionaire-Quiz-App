import React, { useState, useEffect } from 'react';

import Stage from './components/Stage';
import Sidebar from './components/Sidebar';
import StartPage from './components/StartPage';

import './App.scss';

const App = () => {
  const [viewStage, setViewStage] = useState(false);
  const [name, setName] = useState('');
  const [moneyEarned, setMoneyEarned] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('./questions.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.error('Fetch error: ', err));
  }, []);

  return (
    <div className="App">
      {viewStage ? (
        <>
          <Stage />
          <Sidebar name={name} moneyEarned={moneyEarned} />
        </>
      ) : (
        <StartPage setViewStage={setViewStage} setName={setName} name={name} />
      )}
    </div>
  );
};

export default App;
