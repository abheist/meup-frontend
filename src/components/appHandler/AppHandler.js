import { useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { QL_MUTATION_AUTH_REFRESH_TOKEN } from '../../graphql/mutations/authentication';
import {
	getLocalExpTime,
	getLocalRefreshToken,
	getLocalToken,
	setLocalToken,
	setLocalRefreshToken,
	setLocalExpTime
} from '../../helpers/authService';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';

function AppHandler() {
	const [doRefreshToken, { data: refreshTokenData }] = useMutation(
		QL_MUTATION_AUTH_REFRESH_TOKEN
	);

	useEffect(() => {
		if (Math.round(Date.now() / 1000) > getLocalExpTime()) {
			doRefreshToken({
				variables: {
					refreshToken: getLocalRefreshToken()
				}
			});
		}
	}, [doRefreshToken]);

	useEffect(() => {
		if (refreshTokenData?.refreshToken?.success) {
			setLocalToken(refreshTokenData.refreshToken.token);
			setLocalRefreshToken(refreshTokenData.refreshToken.refreshToken);
			setLocalExpTime(refreshTokenData.refreshToken.payload.exp);
		}
	}, [refreshTokenData]);

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
