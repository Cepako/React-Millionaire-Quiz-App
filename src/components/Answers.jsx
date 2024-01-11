import React, { useState } from 'react';
import useSound from 'use-sound';

import './Answers.scss';

import correctSound from '../sounds/correct.mp3';
import wrongSound from '../sounds/wrong.mp3';

const Answers = ({ answers, correct, setQuestionNumber }) => {
  const [answerPressed, setAnswerPressed] = useState(false);

  const [playCorrect] = useSound(correctSound, { volume: 0.1 });
  const [playWrong] = useSound(wrongSound, { volume: 0.1 });

  const isCorrect = (e, i) => {
    if (!answerPressed) {
      e.target.className = 'choice';
      setTimeout(() => {
        if (i === correct) {
          e.target.className = 'correct';
          playCorrect();
        } else {
          e.target.className = 'incorrect';
          playWrong();
        }
      }, 2000);
      setTimeout(() => {
        if (i === correct) {
          setQuestionNumber((prevNumber) => prevNumber + 1);
        } else {
        }
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
