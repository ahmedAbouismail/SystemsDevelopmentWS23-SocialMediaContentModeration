import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, direction, repeat, speed, classes }) => {
    const textArr = Array.isArray(text) ? text : [text];
    // console.log(textArr);
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
          setTextCount((prevCount) => ++prevCount);
        } else {
          setMessage(str.slice(0, index));
          index--;
        }
      }, speed);
    };
  
    const typingInit = () => {
      if (textCount >= textArr.length) {
        if (repeatCount > 0) setRepeatCount((prev) => prev - 1);
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
      // Aufräumen des Intervalls, wenn die Komponente entladen wird
      return () => clearInterval(interval);
    }, [textCount]);
  
    return <p className={classes}>{message}</p>;
  };
  
  export default TypingEffect;