import React, { Component } from 'react';
import horizon from '../db'

export default class Login extends Component {

    handleAuth = () => {
        horizon.authEndpoint('github').subscribe((endpoint) => {
            window.location.pathname = endpoint;
        });
    };

    render() {
        return (
	        <div>
                <button className={'login-btn'} onClick={this.handleAuth}>Login with Github</button>
            </div>
        );
    }
}