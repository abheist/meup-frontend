import React from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import { MeButton } from '../styles/MeButton';
import * as Yup from 'yup';
import { MeTextInput } from '../styles/MeTextInput';
import { QL_MUTATION_AUTHENTICATION } from '../../graphql/mutations/authentication';
import { useMutation } from '@apollo/client';

function LoginForm(props) {
  const [authenticate, { data }] = useMutation(QL_MUTATION_AUTHENTICATION);

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
          authenticate({
            variables: {
              username: values.username,
              password: values.password
            }
          });
          setSubmitting = false;
        }}
      >
        <Form>
          <label htmlFor="username">Username</label>
          <Field
            as={MeTextInput}
            name="username"
            type="text"
            autoComplete="username"
          />
          <ErrorMessage name="username" />

          <label htmlFor="password">Password</label>
          <Field
            as={MeTextInput}
            name="password"
            type="password"
            autoComplete="current-password"
          />
          <ErrorMessage name="password" />
          <MeButton type="submit" kind="primary">
            Login
          </MeButton>
        </Form>
      </Formik>
      {data && props.authenticateUser(data.tokenAuth.token)}
    </>
  );
}

export default LoginForm;
