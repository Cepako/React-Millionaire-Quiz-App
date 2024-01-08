import React, { useState } from 'react';

import './StartPage.scss';

const StartPage = ({ setViewStage, name, setName }) => {
  const [validation, setValidation] = useState(false);
  const [wasSubmited, setWasSubmited] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '') {
      setWasSubmited(true);
      return setValidation(true);
    } else if (name.length > 10 || name.length < 3) {
      setWasSubmited(true);
      return setValidation(true);
    }
    setViewStage(true);
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);
    if (value.length > 2 && value.length < 11 && validation)
      setValidation(false);
    else if ((value.length > 10 || value.length < 3) && wasSubmited)
      setValidation(true);
  };

  return (
    <div className="StartPage">
      {validation ? (
        <>
          <div className="validation">
            Your Name must be 3-10 characters long!
          </div>
          <span></span>
        </>
      ) : null}

      <form>
        <input
          type="text"
          placeholder="enter your name"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Start</button>
      </form>
    </div>
  );
};

export default StartPage;
