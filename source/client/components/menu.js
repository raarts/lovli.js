import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import horizon, { clearAuthTokens } from '../db';

export default class Menu extends Component {

    logout = (e) =>  {
	    e.preventDefault();
	    clearAuthTokens();
	    this.context.router.push("/")
    }

    render() {
        var menu = horizon.hasAuthToken()
            ?   <div className={'menu'}>
                    <IndexLink to="/" className={'menu-option'} activeClassName="active">Home</IndexLink>
                    <Link to="/messages" className={'menu-option'} activeClassName="active">Messages</Link>
                    <a href="#" className={'menu-option'} onClick={this.logout}>Logout</a>
                </div>
            :   <div className={'menu'}>
                    <IndexLink to="/" className={'menu-option'} activeClassName="active">Home</IndexLink>
                    <Link to="/login" className={'menu-option'} activeClassName="active">Login</Link>
                </div>;
        
        return (
	        menu
        );
    }
}

Menu.contextTypes = {
  router: React.PropTypes.object
};