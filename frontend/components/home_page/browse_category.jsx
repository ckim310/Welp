import React from 'react';
import { Link } from 'react-router-dom';

const BrowseCategory = props => {
  return (
    <div className="browse-category-wrapper">
      <h2 className="browse-category-header">Browse Businesses By Category</h2>
      
      <div className="browse-rows">
        <div className="browse-category-top">
          <div className="category">
            <a href="#">
              Restaurants
            </a>
          </div>
        </div>

        <div className="browse-category-bottom">
          <div></div>
        </div>
      </div>
    </div>
  )
};

export default BrowseCategory;