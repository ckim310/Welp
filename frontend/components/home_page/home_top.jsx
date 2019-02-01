import React from 'react';
import { Link } from 'react-router-dom';
import HeaderForm from '../session_form/header_form';
import SearchForm from './search_form';

const HomeTop = (props) => {

  return (
    <div className="home-inner">
      <div className="home-inner-logo">
        <h1 className="home-logo">
          <Link to="/">
            <div className="logo">welp</div>
            <i className="fab fa-yelp"></i></Link>
        </h1>
      </div>

      <div className="home-inner-search-wrapper">
        <SearchForm />
      </div>

      <div className="home-inner-links-wrapper">
        <div className="search-links">
          <Link to="/businesses" className="restaurants">
            <i className="fas fa-utensils"></i>
            <span className="link-text">
              Restaurants
            </span>
          </Link>

          <Link to="/businesses" className="nightlife">
            <i className="fas fa-glass-martini-alt"></i>
            <span className="link-text">
              Nightlife
            </span>
          </Link>

          <Link to="/businesses" className="home-service">
            <i className="fas fa-tools"></i>
            <span className="link-text">
              Home Services
            </span>
          </Link>

          <Link to="/businesses" className="delivery">
            <i className="fas fa-truck"></i>
            <span className="link-text">
              Delivery
            </span>
          </Link>
        </div>
      </div>

      <div className="home-inner-cred-wrapper">
        <div className="credit-links">
          <div className="description">
            <a className="photo-description" href="#">
              <p className="credit-text">Shake Shack Burger</p>
            </a>
          </div>

          <div className="credit">
            <p className="credit-text">Photo by &nbsp;</p>
            <a className="photo-by" href="https://www.instagram.com/dsfoodtravels/">
              <p className="photographer-name">dsfoodtravels<i className="fab fa-instagram"></i></p>
            </a>
          </div>
        </div>
      </div>

    </div>
  )
};

export default HomeTop;