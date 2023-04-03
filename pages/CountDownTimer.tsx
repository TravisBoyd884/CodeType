import React from 'react'
import { useEffect, useState } from 'react'
import styles from '../styles/timerstyles.module.scss'

interface MyComponentProps {
  timeLimit: number;
  start: boolean;
  numCharsTyped: number;
  handleCallBack: any;
}

export default function CountDownTimer(props: MyComponentProps) {
  const [active, setActive] = useState(props.start);
  const [wpm, setwpm] = useState(0);
  const [prevwpm, setprevwpm] = useState(0);
  const [time, setTime] = useState(props.timeLimit);

  const stoppedTyping = () => {
    setTime(props.timeLimit);
    setprevwpm(wpm);
    setwpm(0);
    props.handleCallBack()
  }

  useEffect(() => {
    setTime(props.timeLimit)
    stoppedTyping();
  }, [props.timeLimit])

  useEffect(() => {
    setActive(props.start)
  }, [props.start])

  if (active && time === 0) {
    setActive(false);
  }

  useEffect(() => {
    let interval: any;
    if (active) {
      interval = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [active]);

  useEffect(() => {
    if (time === 0) {
      stoppedTyping();
    }
    if (props.numCharsTyped != 0 && time != 0) {
      let rawWpm = ((props.numCharsTyped / 5) * 60) / ((props.timeLimit - time) % 60);
      setwpm(Math.round(rawWpm));
    }
  }, [time]);

  return (
    <div className={styles.timer}>
      <h1>WPM: {time === props.timeLimit ? prevwpm : wpm}</h1>
      <h1>Time: {time}s</h1>
    </div>
  )
}
