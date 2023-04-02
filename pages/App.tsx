import React, { useEffect, useState } from 'react'
import styles from '../styles/appstyles.module.scss'
import BlinkingCursor from './BlinkingCursor'
import { textArray } from '../misc/textArray'
import CountDownTimer from './CountDownTimer'

export default function App() {
  const [colorIndex, setColorIndex] = useState(0);
  const [cursorPosX, setCursorPosX] = useState(0);
  const [sliceIndex, setsliceIndex] = useState(0);
  const [startTimer, setstartTimer] = useState(false);
  const [textArrayIndex, setTextArrayIndex] = useState(0);
  const typableText = textArray[textArrayIndex]

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  const setColorAndCursor = (i: number, x: number) => {
    setColorIndex((colorIndex + i) % typableText.length);
    setCursorPosX(cursorPosX + x);
  }
  let canEnter = false;

  const characterToType = typableText.charAt(colorIndex + 1);

  const handleKeyDown = (event) => {

    if (characterToType === '~') {
      canEnter = true;
    }

    switch (event.key) {
      case characterToType:
        setColorAndCursor(1, 14.5);
        setstartTimer(true);
        console.log("startTimer: " + startTimer);
      case " ":
        event.preventDefault();
        break;
      case "Tab":
        if (characterToType === ' ' && typableText.charAt(colorIndex + 2) == ' ')
          setColorAndCursor(2, 29);
        event.preventDefault();
        break;
      case "Enter":
        if (canEnter) {
          setColorAndCursor(2, -cursorPosX);
          setsliceIndex(colorIndex + 1);
        }
        event.preventDefault();
        canEnter = false;
        break;
      case "Backspace":
        setColorAndCursor(-1, -14.5);
        break;
      case "'":
        event.preventDefault();
        if (event.key === characterToType) {
          setColorAndCursor(1, 14.5);
        }
        break;
      case "/":
        event.preventDefault();
        break;
      default:
        break;
    }
  }

  const renderText = () => {
    return typableText.split('').map((char, index) => (
      <span key={index} style={{ color: index <= colorIndex ? 'red' : '#1c82adc4' }}>
        {'~' === char ? '' : char}
      </span>
    ));
  };

  const textToRender = renderText().slice(sliceIndex)

  const changeText = () => {
    if (textArrayIndex < textArray.length - 1) {
      setTextArrayIndex(textArrayIndex + 1);
    } else {
      setTextArrayIndex(0);
    }
    setsliceIndex(0);
    setColorIndex(0);
    setCursorPosX(0);
    setstartTimer(false);
  }

  function CallBack() {
    changeText();
  }

  const timerProps = {
    timeLimit: 30,
    start: startTimer,
    numCharsTyped: colorIndex,
    handleCallBack: CallBack,
  }

  return (
    <>
      <CountDownTimer {...timerProps} />
      <button className={styles.changetext} onClick={changeText}>ChangeText</button >
      <span>
        <pre className={styles.code}>
          <code>
            <BlinkingCursor cursorposx={cursorPosX} />
            {textToRender}
          </code>
        </pre>
      </span>
    </>
  )
}
