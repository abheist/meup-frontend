import {
	setLocalToken,
	setLocalRefreshToken,
	setLocalExpTime
} from './authService';

const setRefreshTokenContent = data => {
	if (data?.refreshToken?.success) {
		setLocalToken(data.refreshToken.token);
		setLocalRefreshToken(data.refreshToken.refreshToken);
		setLocalExpTime(data.refreshToken.payload.exp);
	}
};

export { setRefreshTokenContent };
