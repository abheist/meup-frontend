import React, { Component } from 'react';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';
import { isAuthenticated, setAuthToken } from '../../helpers/authService';

class AppHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: isAuthenticated()
    };
  }

  authenticateUser = token => {
    setAuthToken(token);
    this.setState({ ...this.state, isAuthenticated: true });
  };

  render() {
    return (
      <div>
        <div>
          {this.state.isAuthenticated ? (
            <AuthenticatedApp />
          ) : (
            <UnauthenticatedApp authenticateUser={this.authenticateUser} />
          )}
        </div>
      </div>
    );
  }
}

export default AppHandler;
