import React from 'react';
import LoginForm from '../forms/LoginForm';

function UnauthenticatedApp(props) {
  return (
    <>
      <div>
        <LoginForm authenticateUser={props.authenticateUser} />
      </div>
    </>
  );
}

export default UnauthenticatedApp;
