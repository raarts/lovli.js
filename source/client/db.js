import React, { Component } from 'react';
import Horizon from '@horizon/client';

const horizon = Horizon({
  secure: true
});

horizon.connect();

export default horizon;

export function clearAuthTokens() {
  Horizon.clearAuthTokens();
}

export function getCurrentUser(callback)  {
  // _horizon.connect();
  horizon.currentUser().fetch().subscribe(user => callback(user));
}

export function authenticate(ChildComponent)  {
  class AuthenticatedComponent extends Component {

    constructor(props) {
      super(props);
      this.state = {currentUser: ''};
    }

    componentDidMount() {
      if(horizon.hasAuthToken()) {
        getCurrentUser( (user) => {
          this.setState({currentUser: user.id});
        } );
      }

    }

    render () {
      return (horizon.hasAuthToken()
          ? <ChildComponent {...this.props} user={this.state.currentUser} />
          : <Login />
      )
    }
  }

  return AuthenticatedComponent;
}

