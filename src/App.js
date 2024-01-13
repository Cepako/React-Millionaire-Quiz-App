import React, { useState, useEffect } from 'react';

import Stage from './components/Stage';
import Sidebar from './components/Sidebar';
import StartPage from './components/StartPage';

import './App.scss';

const App = () => {
  const [viewStage, setViewStage] = useState(false);
  const [name, setName] = useState('');
  const [moneyEarned, setMoneyEarned] = useState(0);
  const [data, setData] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [gameEnd, setGameEnd] = useState(false);

  const [tempData, setTempData] = useState([]);

  useEffect(() => {
    fetch('./questions.json')
      .then((response) => response.json())
      .then((data) => {
        setData(data.games);
        setTempData(data.games);
      })
      .catch((err) => console.error('Fetch error: ', err));
  }, [gameEnd]);

  const viewComponent = viewStage ? (
    <>
      <Stage
        data={data}
        questionNumber={questionNumber}
        setData={setData}
        setQuestionNumber={setQuestionNumber}
        gameEnd={gameEnd}
        setGameEnd={setGameEnd}
        moneyEarned={moneyEarned}
        setMoneyEarned={setMoneyEarned}
        setViewStage={setViewStage}
        tempData={tempData}
        setName={setName}
      />
      <Sidebar
        name={name}
        moneyEarned={moneyEarned}
        questionNumber={questionNumber}
        setMoneyEarned={setMoneyEarned}
      />
    </>
  ) : (
    <StartPage setViewStage={setViewStage} setName={setName} name={name} />
  );

  return <div className="App">{viewComponent}</div>;
};

export default App;
