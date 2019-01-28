import React from 'react';
import NavBarRightContainer from './nav_bar_right_container';
import SearchForm from '../home_page/search_form';
import HeaderForm from '../session_form/header_form';

const SearchNavBar = props => {

  return (
    <div className="search-nav-bar-container">
      <div className="search-nav-bar-content">
        <div className="search-nav-bar-item">
          <HeaderForm />
        </div>

        <div className="search-nav-bar-item">
          <SearchForm />
        </div>

        <div className="search-nav-bar-item">
          <NavBarRightContainer />
        </div>
      </div>
    </div>
  );
};

export default SearchNavBar;