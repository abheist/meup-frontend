import { gql } from '@apollo/client';

export const QL_MUTATION_AUTHENTICATION = gql`
	mutation TokenAuth($username: String!, $password: String!) {
		tokenAuth(username: $username, password: $password) {
			token
		}
	}
`;
