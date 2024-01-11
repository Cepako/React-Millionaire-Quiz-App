import React, { useEffect, useRef, useState } from 'react';

import './Timer.scss';

const Timer = ({ questionNumber }) => {
  const [time, setTime] = useState(30);
  const intervalIndexRef = useRef(null);

  useEffect(() => {
    setTime(30);
    intervalIndexRef.current = setInterval(() => {
      setTime((prevValue) => {
        if (prevValue === 1) clearInterval(intervalIndexRef.current);
        return prevValue - 1;
      });
    }, 1000);

    return () => clearInterval(intervalIndexRef.current);
  }, [questionNumber]);

  return <div className="Timer">{time < 10 ? `0${time}` : time}</div>;
};

export default Timer;
