import React from 'react';
import '../../assets/Inter/inter.css';
import './App.css';
import Theme from './Theme';
import { MeButton } from '../styles/MeButton';

function App() {
  return (
    <Theme>
      Hellos
      <MeButton>Hello World!</MeButton>
    </Theme>
  );
}

export default App;
