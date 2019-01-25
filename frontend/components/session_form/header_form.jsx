import React from 'react';
import { Link } from 'react-router-dom';

const HeaderForm = (props) => {

  return (
    <div className="header-wrapper">
      <h1 className="header logo">
        <Link to="/">welp<i className="fab fa-yelp"></i></Link>
      </h1>
    </div>  
  )
}

export default HeaderForm;