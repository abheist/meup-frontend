import { Google } from '@styled-icons/fa-brands/Google';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { Divider } from '../styles/Divider';
import { Flex, FlexItem } from '../styles/Flex';
import { MeButton } from '../styles/MeButton';
import { FormGroup, MeErrorMessage, MeTextInput } from '../styles/MeTextInput';
import { MeH5 } from '../styles/Typography';
import { QL_MUTATION_REGISTER_NEW_USER } from '../../graphql/mutations/authentication';
import { useMutation } from '@apollo/client';
import { generateUsername } from '../../helpers/authenticatedUser';

function SignUpForm() {
	const [doRegisterUser, { data }] = useMutation(
		QL_MUTATION_REGISTER_NEW_USER
	);

	useEffect(() => {
		if (data?.register?.success) {
			console.log('success! Please check your mail to verify yourself');
		}
	}, [data]);

	return (
		<>
			<MeH5>
				<b>Sign up</b> into MeUp
			</MeH5>
			<MeButton kind="primary">
				<Google size="16" title="Get in with Google" />
				Get in with Google
			</MeButton>
			<Divider margin={{ top: 40, bottom: 20 }}>
				<div>or</div>
			</Divider>
			<Formik
				initialValues={{
					email: '',
					password: ''
				}}
				validationSchema={Yup.object({
					email: Yup.string().required('Required!'),
					password: Yup.string().required('Required!')
				})}
				onSubmit={(values, { setSubmitting, resetForm }) => {
					doRegisterUser({
						variables: {
							email: values.email,
							username: generateUsername(),
							password1: values.password,
							password2: values.password
						}
					});
					setSubmitting(false);
					resetForm({});
				}}
			>
				<Form>
					<Flex direction="column" justigy="space-between">
						<FormGroup width="100%">
							<label htmlFor="email">Email</label>
							<Field
								as={MeTextInput}
								name="email"
								type="email"
								width="100%"
								minWidth="230px"
								autoComplete="email"
							/>
							<ErrorMessage
								component={MeErrorMessage}
								name="email"
							/>
						</FormGroup>

						<FormGroup width="100%">
							<label htmlFor="password">New password</label>
							<Field
								width="100%"
								name="password"
								type="password"
								minWidth="350px"
								as={MeTextInput}
								autoComplete="new-password"
							/>
							<ErrorMessage
								component={MeErrorMessage}
								name="password"
							/>
						</FormGroup>
						<FlexItem margin={{ top: 36 }}>
							<MeButton type="submit" kind="primary">
								Sign up
							</MeButton>
						</FlexItem>
					</Flex>
				</Form>
			</Formik>
		</>
	);
}

export default SignUpForm;
