import React from 'react';
import LoginSignupPage from '../loginPage/LoginSignupPage';
import { Switch, Route } from 'react-router-dom';
import EmailVerificationForm from '../forms/EmailVerificationForm';

function UnauthenticatedApp(props) {
	return (
		<Switch>
			<Route path="/activate/:token">
				<EmailVerificationForm />
			</Route>
			<Route path="/">
				<LoginSignupPage {...props} />
			</Route>
		</Switch>
	);
}

export default UnauthenticatedApp;
