import { gql } from '@apollo/client';

export const QL_MUTATION_AUTH_TOKEN_WITH_USERNAME = gql`
	mutation TokenAuth($username: String!, $password: String!) {
		tokenAuth(username: $username, password: $password) {
			token
			success
			errors
			refreshToken
		}
	}
`;

export const QL_MUTATION_AUTH_TOKEN_VERIFY = gql`
	mutation VerifyToken($token: String!) {
		verifyToken(token: $token) {
			payload
			success
			errors
		}
	}
`;

export const QL_MUTATION_AUTH_REFRESH_TOKEN = gql`
	mutation RefreshToken($refreshToken: String!) {
		refreshToken(refreshToken: $refreshToken) {
			token
			payload
			success
			errors
			refreshToken
		}
	}
`;

export const QL_MUTATION_AUTH_REVOKE_TOKEN = gql`
	mutation($refreshToken: String!) {
		revokeToken(refreshToken: $refreshToken) {
			success
			revoked
			errors
		}
	}
`;
