import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import GreetingContainer from './navbar/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';

export default () => {
  return (
    <HashRouter>
      <div className="app-main">
        <header>
          <h1>Welp</h1>
          <GreetingContainer />
        </header>

        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
      </div>
    </HashRouter>
  )
}