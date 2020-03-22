import React from 'react';
import '../../assets/Inter/inter.css';
import './App.css';
import Theme from '../styles/Theme';
import { MeButton } from '../styles/MeButton';
import { Row } from 'react-awesome-styled-grid';

function App() {
  return (
    <Theme>
      <Row>Hello</Row>
      <Row>
        <MeButton kind="primary">Hello World!</MeButton>
      </Row>
    </Theme>
  );
}

export default App;
