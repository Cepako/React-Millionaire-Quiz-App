import React from 'react';

import './RestartButton.scss';

const RestartButton = ({
  setQuestionNumber,
  setGameEnd,
  tempData,
  setData,
  setMoneyEarned,
  setAnswerChoiced,
}) => {
  const handleClick = () => {
    setQuestionNumber(1);
    setGameEnd(false);
    setData(tempData);
    setMoneyEarned(0);
    setAnswerChoiced(false);
  };

  return (
    <button className="Restart" onClick={handleClick}>
      Restart
    </button>
  );
};

export default RestartButton;
