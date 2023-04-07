import React, { useState, useEffect } from 'react';

interface ThisComponenetsProps {
  cursorposx: number;
  colorScheme: string;
}

export default function BlinkingCursor(props: ThisComponenetsProps) {
  const [colorScheme, setcolorScheme] = useState('light');

  useEffect(() => {
    setcolorScheme(props.colorScheme);
  }, [props.colorScheme]);

  // useEffect(() => {
  //   console.log(props.cursorposx.toString() + 'ch');
  // }, [props.cursorposx]);
  let cursorPosition = '0ch';
  if (props.cursorposx && cursorPosition != undefined && cursorPosition != null) {
    cursorPosition = props.cursorposx.toString() + 'ch';
  }


  return (
    <>
      <span style={{
        position: 'absolute',
        marginLeft: cursorPosition,
        borderLeft: '2px solid',
        borderColor: colorScheme === 'light' ? 'black' : 'white',
        height: '1.5em',
      }}></span >
    </>
  );
};


