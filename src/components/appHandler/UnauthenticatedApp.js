import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useMutation } from '@apollo/client';
import { QL_MUTATION_AUTHENTICATION } from '../../graphql/mutations/authentication';

function UnauthenticatedApp(props) {
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
          authenticate(
            {
              variables: {
                username: values.username,
                password: values.password
              }
            },
            console.log(data)
          );
        }}
      >
        <Form>
          <label htmlFor="username">Username</label>
          <Field name="username" type="text" autoComplete="username" />
          <ErrorMessage name="username" />

          <label htmlFor="password">Password</label>
          <Field
            name="password"
            type="password"
            autoComplete="current-password"
          />
          <ErrorMessage name="password" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
      {data && props.authenticateUser(data.tokenAuth.token)}
    </>
  );
}

export default UnauthenticatedApp;
