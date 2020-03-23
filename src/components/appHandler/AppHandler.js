import React from 'react';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';
import { useQuery, gql } from '@apollo/client';

function AppHandler() {
  // const user = true;

  const USERS = gql`
    {
      users {
        id
        email
        username
      }
    }
  `;

  const { loading, error, data } = useQuery(USERS);
  if (loading) return <p>loading...</p>;
  if (error) return <p>error...</p>;
  return (
    <div>
      <code>
        <pre>{JSON.stringify(data.users)}</pre>
      </code>
      {/* <div>{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</div>; */}
    </div>
  );
}

export default AppHandler;
