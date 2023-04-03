import React, { useState, useEffect } from 'react';

interface ThisComponenetsProps {
  cursorposx: number;
}

export default function BlinkingCursor(props: ThisComponenetsProps) {

  return (
    <>
      <span style={{ position: 'relative', display: 'inline-block' }}>
        <span style={{
          position: 'absolute',
          marginLeft: props.cursorposx,
          marginTop: '42px',
          top: 0,
          left: 0,
          borderLeft: '2px solid #000',
          height: '1.2em',
          width: 0,
        }}></span>
      </span>
    </>
  );
};

