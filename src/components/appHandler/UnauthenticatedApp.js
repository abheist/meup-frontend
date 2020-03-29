import React from 'react';
import LoginSignupPage from '../loginPage/LoginSignupPage';

function UnauthenticatedApp(props) {
	return <LoginSignupPage {...props} />;
}

export default UnauthenticatedApp;
