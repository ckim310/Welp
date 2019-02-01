import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../nav_bar/nav_bar';
import HomeTop from './home_top';
import BrowseCategory from './browse_category';


const HomePage = (props) => {

  var sectionStyle = {
    width: "100%",
    background: "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + window.burgerURL + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="home-main-container overlay" style={sectionStyle} >
      <div className="home-main-top-container">
        <NavBar />

        <HomeTop />
      </div>
    </div>
  )
}

export default HomePage;