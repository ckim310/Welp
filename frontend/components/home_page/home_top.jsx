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

      <div className="home-inner-search">
        <SearchForm />

      </div>

    </div>
  )
};

export default HomeTop;