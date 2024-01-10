import React from 'react';

import './Sidebar.scss';

const winningPrice = [
  100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000,
  250000, 500000, 1000000,
];

const Sidebar = ({ name, moneyEarned, questionNumber }) => {
  const winningList = winningPrice.map((price, i) => (
    <li key={i} className={i + 1 === questionNumber ? 'active' : null}>
      {i + 1}
      <span>$ {price}</span>
    </li>
  ));

  return (
    <div className="Sidebar">
      <div>
        <h2>
          Name: <span>{name}</span>
        </h2>
        <h2>
          Total Earned: <span>{moneyEarned}$</span>
        </h2>
      </div>

      <hr></hr>
      <ul>{winningList.reverse()}</ul>
    </div>
  );
};

export default Sidebar;
