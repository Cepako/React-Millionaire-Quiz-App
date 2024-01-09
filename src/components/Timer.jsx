import React, { useEffect, useRef, useState } from 'react';

import './Timer.scss';

const Timer = () => {
  const [time, setTime] = useState(30);
  const intervalIndexRef = useRef(null);

  useEffect(() => {
    intervalIndexRef.current = setInterval(() => {
      setTime((prevValue) => {
        if (prevValue === 1) clearInterval(intervalIndexRef.current);
        return prevValue - 1;
      });
    }, 100);

    return () => clearInterval(intervalIndexRef.current);
  }, []);

  return <div className="Timer">{time < 10 ? `0${time}` : time}</div>;
};

export default Timer;
