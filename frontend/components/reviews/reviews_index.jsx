import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { businessId, reviews, currentUserId, business } = this.props;
    if (reviews && currentUserId) {
      reviews.forEach(review => {
        business.reviewsId.forEach(reviewId => {
          if (review.id === reviewId) {
            this.props.fetchAllReactions(businessId, review.id);
          }
        });
      });
    }
  }

  render() {
    const reviews = this.props.reviews.map((review, idx) => {
      return <ReviewIndexItem review={review}
      currentUserId={this.props.currentUserId}
      key={idx}
      trashReview={this.props.trashReview}
      updateReview={this.props.updateReview}
      reviewReactions={review.reactions}
      />
    });

    return (
      <div className="review-index-container">
        <ul className="review-index-list">
          {reviews}
        </ul>
      </div>
    )
  }
}

export default ReviewIndex;