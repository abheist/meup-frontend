import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from 'styled-theming';
import {
  LIGHT_COLOR,
  DARK_COLOR,
  SAN_SERIF_FONT,
  MONO_SPACED_FONT
} from './ThemeConstants';

export const backgroundColor = theme('mode', {
  light: LIGHT_COLOR,
  dark: DARK_COLOR
});

const textColor = theme('mode', { light: DARK_COLOR, dark: LIGHT_COLOR });
const fontFamily = theme('font', {
  sanSerif: SAN_SERIF_FONT,
  monoSpaced: MONO_SPACED_FONT
});

const GlobalStyle = createGlobalStyle`

  body {
    color: ${textColor};
    background-color: ${backgroundColor};
    font-family: ${fontFamily};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }

  ::selection {
    color: rgb(255, 255, 255);
    background-color: rgb(87, 62, 222);

}
`;

const Theme = props => (
  <ThemeProvider
    theme={{ mode: mode => mode.light, font: font => font.sanSerif }}
  >
    <GlobalStyle />
    {props.children}
  </ThemeProvider>
);

export default Theme;
