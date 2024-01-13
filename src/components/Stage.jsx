import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';

import Answers from './Answers';
import GameEnd from './GameEnd';
import Timer from './Timer';
import Question from './Question';
import QuitGameButton from './QuitGameButton';
import RestartButton from './RestartButton';

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
  setMoneyEarned,
  setViewStage,
  setName,
}) => {
  const [play] = useSound(playSound, { volume: 0.1 });
  const [answers, setAnswers] = useState([]);
  const [answerChoiced, setAnswerChoiced] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [question, setQuestion] = useState('');

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
  }, [questionNumber, gameEnd]);

  const buttonsProps = {
    setQuestionNumber,
    setGameEnd,
    setMoneyEarned,
    setAnswerChoiced,
  };

  const stageView = gameEnd ? (
    <>
      <RestartButton buttonsProps={buttonsProps} />
      <QuitGameButton
        buttonsProps={buttonsProps}
        setViewStage={setViewStage}
        setName={setName}
      />
      <GameEnd moneyEarned={moneyEarned} />
    </>
  ) : (
    <>
      <Timer
        answerChoiced={answerChoiced}
        questionNumber={questionNumber}
        setGameEnd={setGameEnd}
      />
      <Question question={question} />
      <Answers
        answers={answers}
        correct={correctAnswer}
        setAnswerChoiced={setAnswerChoiced}
        setGameEnd={setGameEnd}
        setQuestionNumber={setQuestionNumber}
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
