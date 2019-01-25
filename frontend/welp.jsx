import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './store/store';

// // for TESTING only
// import { login } from './actions/session_actions';
// import { fetchBusinesses } from './actions/business_actions';

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
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { currentUserId: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // // for TESTING ONLY
  // window.store = store
  // window.dispatch = store.dispatch;
  // window.getState = store.getState;
  // window.fetchBusinesses = fetchBusinesses;

  ReactDOM.render(<Root store={store} />, root)
});