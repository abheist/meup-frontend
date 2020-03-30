import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { QL_MUTATION_VERIFY_ACCOUNT_TOKEN } from '../../graphql/mutations/authentication';

function EmailVerificationForm() {
	const [doVerifyToken, { data, loading, error }] = useMutation(
		QL_MUTATION_VERIFY_ACCOUNT_TOKEN
	);

	let { token } = useParams();

	useEffect(() => {
		console.log('calling');
		doVerifyToken({ variables: { token: token } });
	}, [token, doVerifyToken]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	if (data?.verifyAccount?.success) {
		return <div>verified</div>;
	} else if (
		data?.verifyAccount?.errors?.nonFieldErrors[0].code ===
		'already_verified'
	) {
		console.log('Account already verified!!!');
		return <div>Account already verified!!!</div>;
	}
	return <div>Something!!!</div>;
}

export default EmailVerificationForm;
