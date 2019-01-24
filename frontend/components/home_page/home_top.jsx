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
            Restaurants
          </a>

          <a className="nightlife" href="#">
            <i class="fas fa-cocktail"></i>
            Nightlife
          </a>

          <a className="home-service" href="#">
            <i class="fas fa-tools"></i>
            Home Services
          </a>

          <a className="delivery" href="#">
            <i class="fas fa-truck"></i>
            Delivery
          </a>

        </div>
      </div>

    </div>
  )
};

export default HomeTop;