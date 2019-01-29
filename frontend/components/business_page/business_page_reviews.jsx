import React from 'react';

class BusinessPageReviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="reviews-wrapper">
        <div className="reviews-feed-container">
          <div className="feed-header-container">
            <div className="feed-header">
              <h2 className="header">
                Recommended Reviews
                <b>for Upstate</b>
              </h2>

              <div className="feed-banner"></div>

              <div className="feed-search"></div>
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