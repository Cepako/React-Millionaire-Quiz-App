import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';

import Timer from './Timer';
import Question from './Question';
import Answers from './Answers';
import GameEnd from './GameEnd';

import './Stage.scss';

import playSound from '../sounds/play.mp3';

const Stage = ({
  data,
  setData,
  questionNumber,
  setQuestionNumber,
  gameEnd,
  setGameEnd,
  moneyEarned,
}) => {
  const [play] = useSound(playSound, { volume: 0.1 });
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [answerChoiced, setAnswerChoiced] = useState(false);

  let difficultyLevel, indexInEffect;
  if (questionNumber < 4) difficultyLevel = 0;
  else if (questionNumber < 7) difficultyLevel = 1;
  else if (questionNumber < 10) difficultyLevel = 2;
  else if (questionNumber < 13) difficultyLevel = 3;
  else difficultyLevel = 4;

  const randomIndex = Math.floor(
    Math.random() * data[difficultyLevel].questions.length
  );

  useEffect(() => {
    play();
  }, [play]);

  useEffect(() => {
    indexInEffect = randomIndex;
    setQuestion(data[difficultyLevel].questions[indexInEffect].question);
    setAnswers(data[difficultyLevel].questions[indexInEffect].content);
    setCorrectAnswer(data[difficultyLevel].questions[indexInEffect].correct);

    setData((prevData) => {
      const newData = [...prevData];
      newData[difficultyLevel].questions.splice(indexInEffect, 1);
      return newData;
    });
  }, [questionNumber]);

  const stageView = gameEnd ? (
    <GameEnd moneyEarned={moneyEarned} />
  ) : (
    <>
      <Timer
        questionNumber={questionNumber}
        setGameEnd={setGameEnd}
        answerChoiced={answerChoiced}
      />
      <Question question={question} />
      <Answers
        answers={answers}
        correct={correctAnswer}
        setQuestionNumber={setQuestionNumber}
        setGameEnd={setGameEnd}
        setAnswerChoiced={setAnswerChoiced}
      />
      ;
    </>
  );

  return (
    <div className="Stage">
      <img src="./millionaireBackground.jpg" alt="background" />
      {stageView}
    </div>
  );
};

export default Stage;
