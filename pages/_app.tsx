import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import SegmentedToggle from './SegmentedToggle'
import { useEffect, useState } from 'react'
import SplitButton from './SplitBotton';

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const [changeText, setchangeText] = useState(false);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
  };


  const handleClick = () => {
    setchangeText(true);
  }

  useEffect(() => {
    setchangeText(false);
  }, [changeText])

  return (
    <>
      <Head>
        <title>Code Type</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: colorScheme,
          }}
        >
          <div style={{ display: 'flex', columnGap: '20px', justifyContent: 'center' }}>
            <SplitButton handleClick={handleClick} />
            <SegmentedToggle toggleColorScheme={toggleColorScheme} />
          </div>
          <Component {...pageProps} activeChangeText={changeText} colorScheme={colorScheme} />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

