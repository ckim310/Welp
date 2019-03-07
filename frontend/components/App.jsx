import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomePage from './home_page/home_page';
import Footer from './footer/footer';
import BusinessIndexContainer from './business_index/business_index_container';
import BusinessPage from './business_page/business_page';
import ReviewFormNew from './reviews/review_form_new_container';
import ReviewFormEdit from './reviews/review_form_edit_container';
import SearchIndex from './search/search_index';
import ScrollToTop from './scroll_to_top';

export default () => {
  return (
    <HashRouter>
      <ScrollToTop>
        <div className="app-main">
          <header>
            <Route exact path="/" component={HomePage} />
          </header>

          <AuthRoute path="/login" component={LoginFormContainer} />
          <AuthRoute path="/signup" component={SignupFormContainer} />
          <Route exact path="/businesses" component={BusinessIndexContainer} />
          <Route exact path="/businesses/:businessId" component={BusinessPage} />
          <Route path="/businesses/search" component={SearchIndex} />
          <ProtectedRoute path="/businesses/:businessId/reviews/:reviewId/edit" component={ReviewFormEdit} />
          <ProtectedRoute exact path="/businesses/:businessId/reviews" component={ReviewFormNew} />

          <footer className="main-footer-wrapper">
            <Footer />
          </footer>
        </div>
      </ScrollToTop>
    </HashRouter>
  )
}