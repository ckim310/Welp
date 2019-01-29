import React from 'react';

class BusinessPageReviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="reviews-wrapper">
        <div className="reviews-feed-container">
          <div className="feed-header-containter">
            <div className="feed-header-content">
              <h2 className="feed-header">
                Recommended Reviews
                <b> for Upstate</b>
              </h2>

              <div className="feed-banner-container">
                <div className="feed-banner-content">
                  <div className="feed-banner-icon">
                    <i className="fab fa-yelp"></i>
                  </div>

                  <div className="feed-banner-text">
                    <span className="banner-text">
                      <strong className="banner-text-bold">
                        Your trust is my top concern, 

                      </strong>
                      &nbsp;this is a clone of yelp and all code written
                      for this clone was written by Christine Kim.
                      <a href="https://www.linkedin.com/in/christine-kim-46857544/"> Learn more about Christine.</a>
                    </span>
                  </div>

                  <div className="feed-banner-x">
                    <span className="banner-close">
                      &times;
                    </span>
                  </div>
                </div>
              </div>

              <div className="feed-search-container">
                <div className="feed-search">
                </div>
              </div>
            </div>
          </div>

          <div className="reviews-list-container"></div>

          <div className="review-page-no-container"></div>
        </div>
      </div>
    )
  }
}

export default BusinessPageReviews;