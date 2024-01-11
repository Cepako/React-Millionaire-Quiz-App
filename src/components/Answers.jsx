import React, { useState } from 'react';
import useSound from 'use-sound';

import './Answers.scss';

import correctSound from '../sounds/correct.mp3';
import wrongSound from '../sounds/wrong.mp3';

const Answers = ({ answers, correct, setQuestionNumber }) => {
  const [answerPressed, setAnswerPressed] = useState(false);

  const [playCorrect] = useSound(correctSound, { volume: 0.1 });
  const [playWrong] = useSound(wrongSound, { volume: 0.1 });

  const isCorrect = (i) => {
    if (!answerPressed) {
      setTimeout(() => {
        if (i === correct) {
          playCorrect();
          setQuestionNumber((prevNumber) => prevNumber + 1);
        } else playWrong();
        setAnswerPressed(false);
      }, 3000);

      setAnswerPressed(true);
    }
  };

  const answersList = answers.map((answer, i) => (
    <li onClick={() => isCorrect(i)} key={answer}>
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
