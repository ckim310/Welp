import React from 'react';

const SubNavBar = (props) => {
  return (
    <div className="sub-nav-bar-container">
      <div className="sub-nav-bar-wrapper">
        <div className="sub-nav-bar-content">
          <div className="sub-content-container">
            <div className="sub-item" id="restaurants">
              <ul className="restaurants-list">
                <li>
                  <a href="#">Restaurants</a>
                  <ul className="popup">
                    <li>
                      <i className="fas fa-motorcycle"></i>
                      <span>Delivery</span>
                    </li>

                    <li>
                      <i className="fas fa-cookie-bite"></i>
                      <span>Dessert</span>
                    </li>
                  
                    <li>
                      <i className="fas fa-lemon"></i>
                      <span>Sour</span>
                    </li>
                  </ul>
                </li>


              </ul>
            </div>
            
            <div className="sub-item" id="home-services"></div>

            <div className="sub-item" id="auto-services"></div>

            <div className="sub-item" id="more"></div>

            <div className="sub-item" id="empty"></div>

            <div className="sub-item" id="review"></div>

            <div className="sub-item" id="for-business"></div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default SubNavBar;