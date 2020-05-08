import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from './react-auth0-spa';
import config from './auth_config.json';
import history from './utils/history';
import { useAuth0 } from '../react-auth0-spa';

const { loginWithRedirect } = useAuth0();

const onRedirectCallback = (appState) => {
  if (appState && appState.targetUrl) {
    return history.push(appState.targetUrl);
  } else {
    loginWithRedirect({ appState: { targetUrl: window.location.pathname } });
  }
};

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
