import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';

import Timer from './Timer';
import Question from './Question';
import Answers from './Answers';

import './Stage.scss';

import playSound from '../sounds/play.mp3';

const Stage = () => {
  const [play] = useSound(playSound, { volume: 0.1 });

  useEffect(() => {
    play();
  }, [play]);

  return (
    <div className="Stage">
      <img src="./millionaireBackground.jpg" alt="background" />
      <Timer className="Timer" />
      <Question />
      <Answers />
    </div>
  );
};

export default Stage;
