import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './store/store';

import { login } from './actions/session_actions';

const Root = ({ store }) => {
  return (
    <div>
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  // window.store = store
  // window.dispatch = store.dispatch;
  // window.getState = store.getState;
  // window.login = login;

  ReactDOM.render(<Root store={store} />, root)
});