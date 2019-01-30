import React from 'react';

const ReviewIndexItem = ({ review }) => {
// debugger
  return (
    <div className="review-index-item-container">
      <li className="review-list-item">

        <div className="review-item-container">
          <div className="review-item-side-container">
            <div className="review-item-user-content">
              <div className="user-pic">
                <i className="fas fa-meh fa-3x"></i>
              </div>

              <div className="user-info-container">
                <ul className="user-data">
                  <li className="user-name">{review.author_id}</li>

                  <li className="user-location">
                    author city, author state
                  </li>
                </ul>

                <ul className="user-stats">
                  <li className="user-friend-count">
                    <i className="fas fa-female"></i>
                    <i className="fas fa-male"></i>
                    &nbsp;friends
                  </li>

                  <li className="user-review-count">
                    <i className="fas fa-star"></i>
                    &nbsp;reviews
                  </li>

                  <li className="user-photo-count">
                    <i className="fas fa-camera"></i>
                    &nbsp;photos
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
    </div>
  )
}

export default ReviewIndexItem;