import React from 'react';

import Timer from './Timer';
import Question from './Question';
import Answers from './Answers';

import './Stage.scss';

const Stage = () => {
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
