import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';
import HomePage from './home_page/home_page';
import Footer from './footer/footer';
import BusinessIndexContainer from './business_index/business_index_container';
import BusinessPage from './business_page/business_page';

export default () => {
  return (
    <HashRouter>
      <div className="app-main">
        <header>
          <Route exact path="/" component={HomePage} />
        </header>

        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <Route exact path="/businesses" component={BusinessIndexContainer} />
        <Route path="/businesses/:businessId" component={BusinessPage} />

        <footer className="main-footer-wrapper">
          <Footer />
        </footer>
      </div>
    </HashRouter>
  )
}