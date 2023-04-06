import React, { useEffect, useState, useRef } from 'react'
import styles from '../styles/appstyles.module.scss'
// import BlinkingCursor from './BlinkingCursor'
import { textArray } from '../misc/textArray'
import CountDownTimer from './CountDownTimer'

export default function Home(props: { activeChangeText: boolean }) {
  const [btnActive, setbtnActive] = useState(30);
  const [colorIndex, setColorIndex] = useState(0);
  const [cursorPosX, setCursorPosX] = useState(0);
  const [sliceIndex, setsliceIndex] = useState(0);
  const [startTimer, setstartTimer] = useState(false);
  const [textArrayIndex, setTextArrayIndex] = useState(0);
  // const [activateChangeText, setactivateChangeText] = useState(props.activeChangeText);
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

    console.log(event.key)

    switch (event.key) {
      case characterToType:
        setColorAndCursor(1, 14.45);
        setstartTimer(true);
      case " ":
        // event.preventDefault();
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
        // event.preventDefault();
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

  useEffect(() => {
    changeText();
  }, [props.activeChangeText])

  function CallBack() {
    changeText();
  }

  const timerProps = {
    timeLimit: time,
    start: startTimer,
    numCharsTyped: colorIndex,
    handleCallBack: CallBack,
    finished: colorIndex === typableText.length - 3 ? true : false,
  }

  const changeTime = (newtime: number) => {
    settime(newtime);
    setbtnActive(newtime);
    return null;
  }

  const changeButtonStyles = (newtime: number) => {
    return btnActive === newtime ? styles.activenavbtn : styles.navbtn
  }

  return (
    <div>
      <div className={styles.nav}>
        <button className={changeButtonStyles(15)} onClick={() => changeTime(15)}>15</button>
        <button className={changeButtonStyles(30)} onClick={() => changeTime(30)}>30</button>
        <button className={changeButtonStyles(60)} onClick={() => changeTime(60)}>60</button>
        <button className={changeButtonStyles(120)} onClick={() => changeTime(120)}>120</button>
      </div>
      <CountDownTimer {...timerProps} />
      {/* <Button className={styles.changetext} onClick={changeText}>ChangeText</Button> */}
      <pre className={styles.code}>
        <code>
          {/* <textarea defaultValue={typableText} style={{ height: '50vh', width: '50vw' }}> */}
          {/* </textarea> */}
          <input style={{ position: 'absolute', height: '100%', width: '100%', background: 'transparent', color: 'transparent', border: 'none' }} />
          {textToRender}
          {/* <input value={{ textToRender }} readOnly type="text" ref={inputRef} style={{ backgroundColor: 'transparent', opacity: '1', width: '100%', height: '100%', border: 'none' }} /> */}
          {/* <BlinkingCursor cursorposx={cursorPosX} /> */}
        </code>
      </pre >
    </div>
  )
}
