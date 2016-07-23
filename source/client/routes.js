import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { authenticate } from './db';
import store from './store';

import MainLayout from './components/main-layout';
import Home from './components/home';
import Login from './components/login';
import App from './components/App';

// Sync routing history with redux store
const history = syncHistoryWithStore(browserHistory, store);

// Route configuration
export default (
  <Router history={history}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={Home} />
      <Route path="messages" component={authenticate(App)} />
      <Route path="login" component={Login} />
    </Route>
  </Router>
);
