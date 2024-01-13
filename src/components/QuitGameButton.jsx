import React from 'react';

import './QuitGameButton.scss';

const QuitGameButton = ({
  setViewStage,
  setGameEnd,
  tempData,
  setData,
  setMoneyEarned,
  setName,
  setQuestionNumber,
  setAnswerChoiced,
}) => {
  const handleClick = () => {
    setGameEnd(false);
    setData(tempData);
    setMoneyEarned(0);
    setViewStage(false);
    setName('');
    setQuestionNumber(1);
    setAnswerChoiced(false);
  };

  return (
    <button className="Quit" onClick={handleClick}>
      Quit
    </button>
  );
};

export default QuitGameButton;
