import React, { useState, useEffect } from 'react';
import styles from '../styles/timerstyles.module.scss'

interface MyComponentProps {
  stopTimer: boolean;
  textLength: number;
  currentCharIndex: number;
}

export default function Timer(props: MyComponentProps) {
  const [time, setTime] = useState(0);
  const [active, setActive] = useState(false);
  const [wpm, setwpm] = useState(0)

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });


  if (props.stopTimer && active && time > 0) {
    setActive(false);
    setTime(0);
  }

  const handleKeyDown = () => {
    setActive(true);
  }

  useEffect(() => {
    // Increment the start time every second
    let interval;
    if (active) {
      interval = setInterval(() => {
        setTime(time => time + 1);
      }, 1000);
    } else if (!active && time != 0) {
      clearInterval(interval);
    }
    // Clean up the interval on unmount
    return () => clearInterval(interval);
  }, [active]);

  // Convert the start time to minutes and seconds
  const seconds = time % 60;

  useEffect(() => {
    if (time != 0) {
      let rawWpm = ((props.currentCharIndex / 5) * 60) / seconds;
      setwpm(Math.round(rawWpm));
    }
  }, [time]);

  // Format the minutes and seconds with leading zeroes if needed
  const formattedSeconds = String(seconds).padStart(2, '0');

  // Build the timer display string
  const timerDisplay = `${formattedSeconds}`;

  return (
    <div className={styles.timer}>
      <h1>{wpm}WPM</h1>
      <h1>
        Time: {seconds}s
      </h1>
    </div>
  );

}
