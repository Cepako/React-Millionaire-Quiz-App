import React from 'react';

import './GameEnd.scss';

const GameEnd = ({ moneyEarned }) => {
  const winningText =
    moneyEarned === 1000000 ? (
      <div className="GameEnd ">
        Congratulations you won!<br></br>🤑 {moneyEarned} $ 🤑
      </div>
    ) : (
      <div className="GameEnd">You Earned Total: {moneyEarned} $</div>
    );

  return winningText;
};

export default GameEnd;
