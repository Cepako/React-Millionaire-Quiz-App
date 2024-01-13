import React from 'react';

import './RestartButton.scss';

const RestartButton = ({ buttonsProps }) => {
  const { setAnswerChoiced, setGameEnd, setQuestionNumber, setMoneyEarned } =
    buttonsProps;

  const handleClick = () => {
    setAnswerChoiced(false);
    setGameEnd(false);
    setQuestionNumber(1);
    setMoneyEarned(0);
  };

  return (
    <button className="Restart" onClick={handleClick}>
      Restart
    </button>
  );
};

export default RestartButton;
