import { useMutation } from '@apollo/client';
import { MailSend } from '@styled-icons/boxicons-regular/MailSend';
import { Google } from '@styled-icons/fa-brands/Google';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import gmailLogo from '../../assets/img/gmailLogo.svg';
import yahooLogo from '../../assets/img/outlookLogo.svg';
import outlookLogo from '../../assets/img/yahooMailLogo.svg';
import { QL_MUTATION_REGISTER_NEW_USER } from '../../graphql/mutations/authentication';
import { generateUsername } from '../../helpers/authenticatedUser';
import { Divider } from '../styles/Divider';
import { Flex, FlexItem } from '../styles/Flex';
import { MeButton } from '../styles/MeButton';
import { FormGroup, MeErrorMessage, MeTextInput } from '../styles/MeTextInput';
import { COLOR_PRIMARY_DARK } from '../styles/ThemeConstants';
import { MeBody2, MeH4, MeH5, MeH6, MeCaption } from '../styles/Typography';
// eslint-disable-next-line no-unused-vars
import styled from 'styled-components/macro';
import { Link, useRouteMatch } from 'react-router-dom';
import { ArrowBack } from '@styled-icons/boxicons-regular/ArrowBack';

function ForgotPasswordForm() {
	const { path, url } = useRouteMatch();

	return (
		<div>
			<MeH5>Forgot password?</MeH5>
			<Formik
				initialValues={{
					email: ''
				}}
				validationSchema={Yup.object({
					email: Yup.string().required('Required!')
				})}
				onSubmit={(values, { setSubmitting, resetForm }) => {
					setSubmitting(false);
					resetForm({});
				}}
			>
				<Form>
					<Flex direction="column" justify="space-between">
						<FormGroup width="100%">
							<label htmlFor="email">Email</label>
							<Field
								as={MeTextInput}
								name="email"
								type="email"
								width="100%"
								minWidth="300px"
								autoComplete="email"
							/>
							<ErrorMessage
								component={MeErrorMessage}
								name="email"
							/>
						</FormGroup>

						<FlexItem margin={{ top: 10 }}>
							<MeButton type="submit" kind="primary">
								Reset password
							</MeButton>
						</FlexItem>
						<MeCaption>
							<Link to="/">
								<ArrowBack
									size="14"
									color={COLOR_PRIMARY_DARK}
									css={`
										margin-right: 4px;
									`}
								/>
								Back to Sign up
							</Link>
						</MeCaption>
					</Flex>
				</Form>
			</Formik>
		</div>
	);
}

export default ForgotPasswordForm;
