import React, { useEffect } from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import { MeButton } from '../styles/MeButton';
import * as Yup from 'yup';
import { MeTextInput, FormGroup, MeErrorMessage } from '../styles/MeTextInput';
import {
	QL_MUTATION_AUTH_TOKEN_WITH_USERNAME,
	QL_MUTATION_AUTH_TOKEN_VERIFY
} from '../../graphql/mutations/authentication';
import { useMutation } from '@apollo/client';
import { Flex, FlexItem } from '../styles/Flex';
import {
	setLocalToken,
	setLocalRefreshToken,
	setLocalExpTime,
	getLocalToken
} from '../../helpers/authService';

function LoginForm({ setToken }) {
	const [requestLogin, { data: loginData }] = useMutation(
		QL_MUTATION_AUTH_TOKEN_WITH_USERNAME
	);

	const [doVerifyToken, { data: verifyTokenData }] = useMutation(
		QL_MUTATION_AUTH_TOKEN_VERIFY
	);

	useEffect(() => {
		if (loginData?.tokenAuth?.success) {
			setLocalToken(loginData.tokenAuth.token);
			setLocalRefreshToken(loginData.tokenAuth.refreshToken);
			doVerifyToken({
				variables: {
					token: loginData.tokenAuth.token
				}
			});
		}
	}, [loginData, doVerifyToken, setToken]);

	useEffect(() => {
		if (verifyTokenData?.verifyToken?.success) {
			setLocalExpTime(verifyTokenData.verifyToken.payload.exp);
			setToken(getLocalToken());
		}
	}, [verifyTokenData, setToken]);

	return (
		<>
			<Formik
				initialValues={{
					username: '',
					password: ''
				}}
				validationSchema={Yup.object({
					username: Yup.string().required('Required!'),
					password: Yup.string().required('Required!')
				})}
				onSubmit={(values, { setSubmitting }) => {
					requestLogin({
						variables: {
							username: values.username,
							password: values.password
						}
					});
					setSubmitting = false;
				}}
			>
				<Form>
					<Flex justigy="space-between">
						<FormGroup margin={{ right: 10 }}>
							<label htmlFor="username">Username</label>
							<Field
								as={MeTextInput}
								name="username"
								type="text"
								autoComplete="username"
							/>
							<ErrorMessage
								component={MeErrorMessage}
								name="username"
							/>
						</FormGroup>

						<FormGroup margin={{ right: 10 }}>
							<label htmlFor="password">Password</label>
							<Field
								as={MeTextInput}
								name="password"
								type="password"
								autoComplete="current-password"
							/>
							<ErrorMessage
								component={MeErrorMessage}
								name="password"
							/>
						</FormGroup>
						<FlexItem margin={{ top: 36 }}>
							<MeButton type="submit" kind="primary">
								Login
							</MeButton>
						</FlexItem>
					</Flex>
				</Form>
			</Formik>
		</>
	);
}

export default LoginForm;
