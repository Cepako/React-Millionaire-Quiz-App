import React from 'react';

import './QuitGameButton.scss';

const QuitGameButton = ({ buttonsProps, setName, setViewStage }) => {
  const { setAnswerChoiced, setGameEnd, setMoneyEarned, setQuestionNumber } =
    buttonsProps;

  const handleClick = () => {
    setAnswerChoiced(false);
    setGameEnd(false);
    setMoneyEarned(0);
    setName('');
    setQuestionNumber(1);
    setViewStage(false);
  };

  return (
    <button className="Quit" onClick={handleClick}>
      Quit
    </button>
  );
};

export default QuitGameButton;
