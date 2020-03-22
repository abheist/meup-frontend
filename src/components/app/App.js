import React from 'react';
import '../../assets/Inter/inter.css';
import './App.css';
import Theme from '../styles/Theme';
import { MeButton } from '../styles/MeButton';
import {
  MeH1,
  MeSubtitle2,
  MeSubtitle1,
  MeH6,
  MeH5,
  MeH4,
  MeH3,
  MeH2,
  MeBody,
  MeBody2,
  MeOverline,
  MeCaption
} from '../styles/Typography';

function App() {
  return (
    <Theme>
      Hellos
      <MeButton>Hello World!</MeButton>
      <MeH1>Hello</MeH1>
      <MeH2>Hello</MeH2>
      <MeH3>Hello</MeH3>
      <MeH4>Hello</MeH4>
      <MeH5>Hello</MeH5>
      <MeH6>Hello</MeH6>
      <MeSubtitle1>Hello</MeSubtitle1>
      <MeSubtitle2>Hello</MeSubtitle2>
      <MeBody>Hello</MeBody>
      <MeBody2>Hello</MeBody2>
      <MeCaption>Hello</MeCaption>
      <MeOverline>Hello</MeOverline>
    </Theme>
  );
}

export default App;
