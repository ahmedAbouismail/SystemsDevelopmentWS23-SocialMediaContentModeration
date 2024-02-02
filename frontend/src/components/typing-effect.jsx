import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const TypingEffect = ({ text, direction, repeat, speed, classes }) => {
  const textArr = Array.isArray(text) ? text : [text];
  const [message, setMessage] = useState('');
  const [textCount, setTextCount] = useState(0);
  const [repeatCount, setRepeatCount] = useState(repeat);

  let interval;
  let index = 0;

  const type = (str) => {
    interval = setInterval(() => {
      if (index > str.length) {
        clearInterval(interval);
        if (direction === 'both') backspace(str);
      } else {
        setMessage(str.slice(0, index));
        index++;
      }
    }, speed);
  };

  const backspace = (str) => {
    interval = setInterval(() => {
      if (index < 0) {
        clearInterval(interval);
        setTextCount((prevTextCount) => prevTextCount + 1);
      } else {
        setMessage(str.slice(0, index));
        index--;
      }
    }, speed);
  };

  const typingInit = () => {
    if (textCount >= textArr.length) {
      if (repeatCount > 0)
        setRepeatCount((prevRepeatCount) => prevRepeatCount - 1);
      setTextCount(0);
    } else {
      if (direction === 'forward' || direction === 'both') {
        type(textArr[textCount]);
      } else if (direction === 'backward') {
        backspace(textArr[textCount]);
      }
    }
  };

  useEffect(() => {
    typingInit();
    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textCount]);

  return <p className={classes}>{message}</p>;
};

TypingEffect.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  direction: PropTypes.oneOf(['forward', 'backward', 'both']),
  repeat: PropTypes.number,
  speed: PropTypes.number,
  classes: PropTypes.string,
};

TypingEffect.defaultProps = {
  direction: 'forward',
  repeat: 0,
  speed: 100,
  classes: '',
};

export default TypingEffect;
