import React, { useEffect } from 'react';
import useSound from 'use-sound';

import Timer from './Timer';
import Question from './Question';
import Answers from './Answers';

import './Stage.scss';

import playSound from '../sounds/play.mp3';

const Stage = ({ data, setData, questionNumber }) => {
  const [play] = useSound(playSound, { volume: 0.1 });

  let difficultyLevel;
  if (questionNumber < 4) difficultyLevel = 0;
  else if (questionNumber < 7) difficultyLevel = 1;
  else if (questionNumber < 10) difficultyLevel = 2;
  else if (questionNumber < 13) difficultyLevel = 3;
  else difficultyLevel = 4;
  const randomQuestionIndex = Math.floor(
    Math.random() * data[difficultyLevel].questions.length
  );
  const questionData = data[difficultyLevel].questions[randomQuestionIndex];

  const question = questionData.question;
  const answers = questionData.content;
  const correctAnswer = questionData.correct;

  useEffect(() => {
    play();
  }, [play]);

  useEffect(() => {
    setData((prevData) => {
      const newData = [...prevData];
      newData[difficultyLevel].questions.splice(randomQuestionIndex, 1);
      return newData;
    });
  }, []);

  return (
    <div className="Stage">
      <img src="./millionaireBackground.jpg" alt="background" />
      <Timer />
      <Question question={question} />
      <Answers answers={answers} correct={correctAnswer} />
    </div>
  );
};

export default Stage;
