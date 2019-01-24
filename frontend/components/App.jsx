import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';
import HomePage from './home_page/home_page';

export default () => {
  return (
    <HashRouter>
      <div className="app-main">
        <header>
          <Route exact path="/" component={HomePage} />
        </header>

        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
      </div>
    </HashRouter>
  )
}