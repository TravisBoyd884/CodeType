import React, { useEffect, useState } from 'react'
import styles from '../styles/appstyles.module.scss'
import BlinkingCursor from './BlinkingCursor'
import { textArray } from '../misc/textArray'
import CountDownTimer from './CountDownTimer'

export default function Home() {
  const [colorIndex, setColorIndex] = useState(0);
  const [cursorPosX, setCursorPosX] = useState(0);
  const [sliceIndex, setsliceIndex] = useState(0);
  const [startTimer, setstartTimer] = useState(false);
  const [textArrayIndex, setTextArrayIndex] = useState(0);
  const [time, settime] = useState(30);
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

  const handleKeyDown = (event: any) => {

    if (characterToType === '~') {
      canEnter = true;
    }

    switch (event.key) {
      case characterToType:
        setColorAndCursor(1, 14.45);
        setstartTimer(true);
      case " ":
        event.preventDefault();
        break;
      case "Tab":
        if (characterToType === ' ' && typableText.charAt(colorIndex + 2) == ' ')
          setColorAndCursor(2, 28.9);
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
        setColorAndCursor(-1, -14.45);
        break;
      case "'":
        event.preventDefault();
        if (event.key === characterToType) {
          setColorAndCursor(1, 14.45);
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
      console.log("textArrayIndex: " + textArrayIndex);
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
    timeLimit: time,
    start: startTimer,
    numCharsTyped: colorIndex,
    handleCallBack: CallBack,
  }

  const changeTime = (newtime: number) => {
    settime(newtime);
    console.log(newtime);
    return null;
  }


  return (
    <>
      <div className={styles.nav}>
        <button className={styles.navbtn} onClick={() => changeTime(15)}>15</button>
        <button className={styles.navbtn} onClick={() => changeTime(30)}>30</button>
        <button className={styles.navbtn} onClick={() => changeTime(60)}>60</button>
        <button className={styles.navbtn} onClick={() => changeTime(120)}>120</button>
      </div>
      <CountDownTimer {...timerProps} />
      <button className={styles.changetext} onClick={changeText}>ChangeText</button >
      <pre className={styles.code}>
        <code>
          <BlinkingCursor cursorposx={cursorPosX} />
          {textToRender}
        </code>
      </pre>
    </>
  )
}