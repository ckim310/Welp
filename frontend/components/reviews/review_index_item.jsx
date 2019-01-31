import React from 'react';
import { formatDate } from '../../util/date_util';

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    const { review } = this.props;
    this.props.trashReview(review.id);
  }

  render() {
    const { review, currentUserId } = this.props;
  
      const ratingNum = () => {
        let rating;
        switch (review.rating) {
          case 1:
            rating = "one";
            return rating;
          case 2:
            rating = "two";
            return rating;
          case 3:
            rating = "three";
            return rating;
          case 4:
            rating = "four";
            return rating;
          case 5:
            rating = "five";
            return rating;
          default:
            rating = "zero";
            return rating;
        }
      };
      let trash;
      if (review.authorId === currentUserId) {
        trash = <button className="delete" onClick={this.handleDelete}>
          <i className="fas fa-trash-alt"></i>
          </button>;
      } else {
        trash = null
      }
    

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
                <div className="rating-mid" id={ratingNum()}>
                </div>

                <div className="created-at">
                  {formatDate(review.created_at)}
                </div>
              </div>

              <div className="review-body">
                {review.body}
              </div>
            </div>

            <div className="review-footer">
              <div className="review-trash">
                {trash}
              </div>
            </div>
          </div>
        </div>
      </li>
    )
  }
}

export default ReviewIndexItem;