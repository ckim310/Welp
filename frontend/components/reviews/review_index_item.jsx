import React from 'react';

const ReviewIndexItem = ({ review }) => {
// debugger
  return (
    <li className="review-list-item">

      <div className="review-item-container">
        <div className="review-item-side-container">
          <div className="review-item-reviewer-content">
            <div className="reviewer-pic">
              <i className="fas fa-meh fa-3x"></i>
            </div>

            <div className="reviewer-info-container">
              <ul className="reviewer-data">
                <li className="reviewer-name">
                  <a href="#/businesses">{review.authorName}</a>
                </li>

                <li className="reviewer-location">
                  {review.authorZipcode}
                </li>
              </ul>

              <ul className="reviewer-stats">
                <li className="reviewer-friend-count">
                  <i className="fas fa-female"></i>
                  &nbsp;
                  <i className="fas fa-male"></i>
                  &nbsp; friends
                </li>

                <li className="reviewer-review-count">
                  <i className="fas fa-star"></i>
                  &nbsp; reviews
                </li>

                <li className="reviewer-photo-count">
                  <i className="fas fa-camera"></i>
                  &nbsp; photos
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="review-wrapper">
          <div className="review-content">
            <div className="review-rating">
              <div className="rating">
                {review.rating} RATING
              </div>

              <div className="created-at">
                {review.created_at.toString()}
              </div>
            </div>

            <div className="review-body">
              {review.body}
            </div>
          </div>

          <div className="review-footer"></div>
        </div>
      </div>
    </li>
  )
}

export default ReviewIndexItem;