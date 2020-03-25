import React from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import { MeButton } from '../styles/MeButton';
import * as Yup from 'yup';
import { MeTextInput, FormGroup } from '../styles/MeTextInput';
import { Flex, FlexItem } from '../styles/Flex';

function SignUpForm(props) {
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
				onSubmit={(values, { setSubmitting }) => {}}
			>
				<Form>
					<Flex direction="column" justigy="space-between">
						<FormGroup width="100%">
							<label htmlFor="username">Username</label>
							<Field
								as={MeTextInput}
								name="username"
								type="text"
								width="100%"
								minWidth="230px"
								autoComplete="username"
							/>
							<ErrorMessage name="username" />
						</FormGroup>

						<FormGroup width="100%">
							<label htmlFor="password">Password</label>
							<Field
								as={MeTextInput}
								width="100%"
								name="password"
								type="password"
								minWidth="350px"
								autoComplete="current-password"
							/>
							<ErrorMessage name="password" />
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
