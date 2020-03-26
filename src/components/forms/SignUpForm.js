import React from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import { MeButton } from '../styles/MeButton';
import * as Yup from 'yup';
import { MeTextInput, FormGroup, MeErrorMessage } from '../styles/MeTextInput';
import { Flex, FlexItem } from '../styles/Flex';
import { MeH5 } from '../styles/Typography';
import { Google } from '@styled-icons/fa-brands/Google';
import { Divider } from '../styles/Divider';

function SignUpForm() {
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
				onSubmit={(values, { setSubmitting }) => {}}
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
							<label htmlFor="password">
								Enter a new password
							</label>
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
