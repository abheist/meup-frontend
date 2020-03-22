import React from 'react';
import '../../assets/Inter/inter.css';
import './App.css';
import Theme from './Theme';
import { MeButton } from '../styles/MeButton';

function App() {
  return (
    <Theme>
      Hellos
      <MeButton disabled>World!</MeButton>
      <MeButton>World!</MeButton>
      <MeButton kind="primary">World!</MeButton>
      <MeButton kind="success">World!</MeButton>
      <MeButton kind="warning">World!</MeButton>
      <MeButton kind="danger">World!</MeButton>
    </Theme>
  );
}

export default App;
