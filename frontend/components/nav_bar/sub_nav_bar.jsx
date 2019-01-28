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
                  <a href="#">
                    <div className="list-icon">
                      <i className="fas fa-utensils"></i>
                    </div>
                    <span>Restaurants</span>
                    <div className="arrow">
                      <i className="fas fa-angle-down"></i>
                    </div>
                  </a>

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
            
            <div className="sub-item" id="home-services">
              <ul className="list">
                <li>
                  <a href="#">
                    <div className="list-icon">
                      <i className="fas fa-home"></i>
                    </div>
                    <span>Home Services</span>
                    <div className="arrow">
                      <i className="fas fa-angle-down"></i>
                    </div>
                  </a>

                  <ul className="popup">
                    <li>
                      <i className="fas fa-hammer"></i>
                      <span>Contractors</span>
                    </li>

                    <li>
                      <i className="fas fa-plug"></i>
                      <span>Electricians</span>
                    </li>
                  
                    <li>
                      <i className="fas fa-broom"></i>
                      <span>Home Cleaners</span>
                    </li>
                  
                    <li>
                      <i className="fas fa-thermometer-half"></i>
                      <span>HVAC</span>
                    </li>
                  
                    <li>
                      <i className="fas fa-tree"></i>
                      <span>Landscaping</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="sub-item" id="auto-services">
              <ul className="list">
                <li>
                  <a href="#">
                    <div className="list-icon">
                      <i className="fas fa-car"></i>
                    </div>
                    <span>Auto Services</span>
                    <div className="arrow">
                      <i className="fas fa-angle-down"></i>
                    </div>
                  </a>

                  <ul className="popup">
                    <li>
                      <i className="fas fa-oil-can"></i>
                      <span>Oil Change</span>
                    </li>

                    <li>
                      <i className="fas fa-parking"></i>
                      <span>Parking</span>
                    </li>

                    <li>
                      <i className="fas fa-truck-pickup"></i>
                      <span>Towing</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="sub-item" id="more">
              <ul className="list">
                <li>
                  <a href="#">
                    <span>More</span>
                    <div className="arrow">
                      <i className="fas fa-angle-down"></i>
                    </div>
                  </a>

                  <ul className="popup">
                    <li>
                      <i className="fas fa-mobile"></i>
                      <span>Phone Repair</span>
                    </li>

                    <li>
                      <i className="fas fa-beer"></i>
                      <span>Bars</span>
                    </li>

                    <li>
                      <i className="fas fa-glass-martini"></i>
                      <span>Nightlife</span>
                    </li>

                    <li>
                      <i className="fas fa-cut"></i>
                      <span>Hair Salons</span>
                    </li>

                    <li>
                      <i className="fas fa-dumbbell"></i>
                      <span>Gyms</span>
                    </li>

                    <li>
                      <i className="fas fa-shopping-bag"></i>
                      <span>Shopping</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="sub-item-empty" id="empty"></div>

            <div className="sub-item" id="review">
              <div className="sub-item-container">
                <i className="fas fa-pencil-alt"></i>
                <span>Write a Review</span>
              </div>
            </div>

            <div className="sub-item" id="for-business">
              <div className="sub-item-container">
                <i className="fas fa-store"></i>
                <span>For Businesses</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default SubNavBar;