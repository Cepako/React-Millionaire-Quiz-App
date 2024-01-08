import React from 'react';

import './Sidebar.scss';

const Sidebar = ({ name }) => {
  return (
    <div className="Sidebar">
      <div>
        <h2>
          Name: <span>{name}</span>
        </h2>
        <h2>
          Total Earned: <span>1000000$</span>
        </h2>
      </div>

      <hr></hr>
      <ul>
        <li>
          15<span>$ 1000000</span>
        </li>
        <li>
          14<span>$ 500000</span>
        </li>
        <li>
          13<span>$ 250000</span>
        </li>
        <li>
          12<span>$ 125000</span>
        </li>
        <li>
          11<span>$ 64000</span>
        </li>
        <li>
          10<span>$ 32000</span>
        </li>
        <li>
          9 <span>$ 16000</span>
        </li>
        <li>
          8 <span>$ 8000</span>
        </li>
        <li>
          7 <span>$ 4000</span>
        </li>
        <li>
          6 <span>$ 2000</span>
        </li>
        <li>
          5 <span>$ 1000</span>
        </li>
        <li>
          4 <span>$ 500</span>
        </li>
        <li>
          3 <span>$ 300</span>
        </li>
        <li className="active">
          2 <span>$ 200</span>
        </li>
        <li>
          1 <span>$ 100</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
