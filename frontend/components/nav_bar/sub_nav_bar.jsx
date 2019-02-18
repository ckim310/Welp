import React from 'react';

const SubNavBar = (props) => {
  return (
    <div className="sub-nav-bar-container">
      <div className="sub-nav-bar-wrapper">
        <div className="sub-nav-bar-content">
          <div className="sub-content-container">
            <div className="sub-content-left">
              <div className="sub-item" id="restaurants">
                <ul className="restaurants-list">
                  <li>
                    <a href="#/businesses">
                      <div className="list-icon">
                        <i className="fas fa-utensils"></i>
                      </div>
                      <span>Restaurants</span>
                      {/* <div className="arrow">
                        <i className="fas fa-angle-down"></i>
                      </div> */}
                    </a>

                    {/* <ul className="popup">
                      <li>
                        <a href="#/businesses/search">New York</a>
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
                    </ul> */}
                  </li>
                </ul>
              </div>
              
              <div className="sub-item" id="home-services">
                <ul className="list">
                  <li>
                    <div className="list-title">
                      <div className="list-icon">
                        <i className="fas fa-external-link-alt"></i>
                      </div>
                      <span>Christine's sites</span>
                      <div className="arrow">
                        <i className="fas fa-angle-down"></i>
                      </div>
                    </div>

                    <ul className="popup">
                      <li>
                        <a href="http://christinekim.co/">
                          <i className="far fa-address-card"></i>
                          <span>Personal Site</span>
                        </a>
                      </li>

                      <li>
                        <a href="https://www.linkedin.com/in/christine-kim-46857544/">
                          <i className="fab fa-linkedin-in"></i>
                          <span>LinkedIn</span>
                        </a>
                      </li>

                      <li>
                        <a href="https://github.com/ckim310">
                          <i className="fab fa-github"></i>
                          <span>GitHub</span>
                        </a>
                      </li>

                      <li>
                        <a href="https://angel.co/ckim310">
                          <i className="fab fa-angellist"></i>
                          <span>AngelList</span>
                        </a>
                      </li>

                    </ul>
                  </li>
                </ul>
              </div>

              <div className="sub-item" id="more">
                <ul className="list">
                  <li>
                    <div className="list-title">
                      <span>Contact Christine</span>
                      <div className="arrow">
                        <i className="fas fa-angle-down"></i>
                      </div>
                    </div>

                    <ul className="popup">

                      <li>
                        <a href="mailto: ckim393@gmail.com">
                          <i className="far fa-envelope"></i>
                          <span>Email me</span>
                        </a>
                      </li>

                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div className="sub-content-right">
              <div className="sub-item-empty" id="empty"></div>

              <div className="sub-item" id="review">
                <div className="sub-item-container">
                  <i className="fas fa-pencil-alt"></i>
                  <a href="#/businesses">Write a Review</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default SubNavBar;