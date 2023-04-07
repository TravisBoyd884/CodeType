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


  return (
    <>
      <span style={{
        position: 'absolute',
        marginLeft: props.cursorposx === undefined ? '0' : props.cursorposx.toString() + 'ch',
        borderLeft: '2px solid',
        borderColor: colorScheme === 'light' ? 'black' : 'white',
        height: '1.5em',
      }}></span>
    </>
  );
};


