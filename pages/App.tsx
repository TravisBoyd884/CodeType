import React, { useEffect, useState } from 'react'
import styles from '../styles/appstyles.module.scss'
import BlinkingCursor from './BlinkingCursor'
import Timer from './Timer'
import { textArray } from '../misc/textArray'
// import SplitButton from './SplitBotton'
// import { text } from 'stream/consumers'


export default function App() {
  const [colorIndex, setColorIndex] = useState(0);
  const [cursorPosX, setCursorPosX] = useState(0);
  const [sliceIndex, setsliceIndex] = useState(0);
  const [textArrayIndex, setTextArrayIndex] = useState(0);
  const typableText = textArray[textArrayIndex]

  const setColorAndCursor = (i, x) => {
    setColorIndex((colorIndex + i) % typableText.length);
    setCursorPosX(cursorPosX + x);
  }

  let canEnter = false;
  const characterToType = typableText.charAt(colorIndex + 1);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = (event) => {

    if (characterToType === '~') {
      canEnter = true;
    }
    switch (event.key) {
      case characterToType:
        setColorAndCursor(1, 14.5);
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

  const changeText = () => {
    if (textArrayIndex < textArray.length - 1) {
      setTextArrayIndex(textArrayIndex + 1);
    } else {
      setTextArrayIndex(0);
    }
    setsliceIndex(0);
    setColorIndex(0);
    setCursorPosX(0);
  }

  const textToRender = renderText().slice(sliceIndex)

  // let line = 0;
  // while (line != 6) {
  //   for (let i = sliceIndex; i < typableText.length; i++) {
  //     if (typableText.charAt(i) == '~') {
  //       line++;
  //     }
  //   }
  // }
  // let line = 0;
  // while (line != 6) {
  //   for (let i = sliceIndex; i < typableText.length; i++) {
  //     if (typableText.charAt(i) == '~') {
  //       line++;
  //     }
  //   }
  // }
  // let line = 0;
  // while (line != 6) {
  //   for (let i = sliceIndex; i < typableText.length; i++) {
  //     if (typableText.charAt(i) == '~') {
  //       line++;
  //     }
  //   }
  // }
  // let line = 0;
  // while (line != 6) {
  //   for (let i = sliceIndex; i < typableText.length; i++) {
  //     if (typableText.charAt(i) == '~') {
  //       line++;
  //     }
  //   }
  // }

  let tellTimerToStop = typableText.length - colorIndex === 1;

  useEffect(() => {
    changeText();
  }, [tellTimerToStop])

  const timerProps = {
    stopTimer: tellTimerToStop,
    textLength: typableText.length,
    currentCharIndex: colorIndex
  }

  return (
    <>
      <button onClick={changeText}>next</button >
      <Timer {...timerProps} />
      <div className={styles.textbox}>
        <span>
          <pre className={styles.code}>
            <code>
              <BlinkingCursor cursorposx={cursorPosX} />
              {textToRender}
            </code>
          </pre>
        </span>
      </div>
    </>
  )
}
