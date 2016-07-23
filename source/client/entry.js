import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

// Root wraps the routes in routes.js in a HorizonConnector
// and connects the store to them
import Root from './containers/Root';

// Accept HMR
if (module.hot) {
  module.hot.accept();
}

// Render application to target container
ReactDOM.render(
  <AppContainer><Root /></AppContainer>,
  document.getElementById('root')
);

// react-hot-loader 3 specific - rerender AppContainer
// in case of problems with react-router, check this issue:
// https://github.com/gaearon/react-hot-loader/issues/249
if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const RootEle = require('./containers/Root').default; // eslint-disable-line
    ReactDOM.render(
      <AppContainer><RootEle /></AppContainer>,
      document.getElementById('root')
    );
  });
}
