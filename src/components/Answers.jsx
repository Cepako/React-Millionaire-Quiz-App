import React, { useState } from 'react';
import useSound from 'use-sound';

import './Answers.scss';

import correctSound from '../sounds/correct.mp3';
import wrongSound from '../sounds/wrong.mp3';

const Answers = ({
  answers,
  correct,
  setQuestionNumber,
  setGameEnd,
  setAnswerChoiced,
}) => {
  const [answerPressed, setAnswerPressed] = useState(false);

  const [playCorrect] = useSound(correctSound, { volume: 0.1 });
  const [playWrong] = useSound(wrongSound, { volume: 0.1 });

  const isCorrect = (e, i) => {
    if (!answerPressed) {
      setAnswerChoiced(true);
      e.target.className = 'choice';
      setTimeout(() => {
        if (i === correct) {
          e.target.className = 'correct';
          playCorrect();
        } else {
          e.target.className = 'incorrect';
          playWrong();
          document.querySelector(
            `.Answers ul li:nth-of-type(${correct + 1})`
          ).className = 'correct';
        }
      }, 2000);
      setTimeout(() => {
        if (i === correct) {
          setQuestionNumber((prevNumber) => prevNumber + 1);
        } else {
          setGameEnd(true);
        }
        setAnswerChoiced(false);
        setAnswerPressed(false);
      }, 3500);

      setAnswerPressed(true);
    }
  };

  const answersList = answers.map((answer, i) => (
    <li onClick={(e) => isCorrect(e, i)} key={answer}>
      {answer}
    </li>
  ));

  return (
    <div className="Answers">
      <ul>{answersList}</ul>
    </div>
  );
};

export default Answers;
