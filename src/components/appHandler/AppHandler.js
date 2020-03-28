import React from 'react';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';
import { getLocalToken } from '../../helpers/authService';
import { useState } from 'react';

function AppHandler() {
	const [token, setToken] = useState(getLocalToken() || undefined);

	return (
		<>
			{!!token ? (
				<AuthenticatedApp />
			) : (
				<UnauthenticatedApp setToken={setToken} />
			)}
		</>
	);
}

export default AppHandler;
