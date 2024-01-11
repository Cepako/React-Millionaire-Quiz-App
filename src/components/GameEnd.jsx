import React from 'react';

import './GameEnd.scss';

const GameEnd = ({ moneyEarned }) => {
  return <div className="GameEnd">You Earned Total: {moneyEarned} $</div>;
};

export default GameEnd;
