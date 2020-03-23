import React from 'react';
import '../../assets/Inter/inter.css';
import './App.css';
import Theme from '../styles/Theme';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';

function App() {
  const user = true;
  return <Theme>{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</Theme>;
}

export default App;
