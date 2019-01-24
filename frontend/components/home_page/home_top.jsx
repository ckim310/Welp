import React from 'react';
import { Link } from 'react-router-dom';
import HeaderForm from '../session_form/header_form';
import SearchForm from './search_form';

const HomeTop = (props) => {

  return (
    <div className="home-inner">
      <div className="home-inner-logo">
        <h1 className="home-logo">
          <Link to="/">welp<i class="fab fa-yelp"></i></Link>
        </h1>
      </div>

      <div className="home-inner-search-wrapper">
        <SearchForm />
      </div>

      <div className="home-inner-links-wrapper">
        <div className="search-links">
          <a className="restaurant" href="#">
            <i class="fas fa-utensils"></i>
            <span className="link-text">
              Restaurants
            </span>
          </a>

          <a className="nightlife" href="#">
            <i class="fas fa-cocktail"></i>
            <span className="link-text">
              Nightlife
            </span>
          </a>

          <a className="home-service" href="#">
            <i class="fas fa-tools"></i>
            <span className="link-text">
              Home Services
            </span>
          </a>

          <a className="delivery" href="#">
            <i class="fas fa-truck"></i>
            <span className="link-text">
              Delivery
            </span>
          </a>
        </div>
      </div>

      <div className="home-inner-cred-wrapper">
        <div className="credit-links">
          <div className="description">
            <a className="photo-description" href="#">
              <p className="credit-text">Photo description</p>
            </a>
          </div>

          <div className="credit">
            <p className="credit-text">Photo by</p>
            <a className="photo-by" href="#">
              <p className="photographer-name">Name</p>
            </a>
          </div>
        </div>
      </div>

    </div>
  )
};

export default HomeTop;