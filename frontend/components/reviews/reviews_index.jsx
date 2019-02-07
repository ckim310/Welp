import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const reviews = this.props.reviews.map((review, idx) => {
      return <ReviewIndexItem review={review} currentUserId={this.props.currentUserId} key={idx} trashReview={this.props.trashReview} updateReview={this.props.updateReview}/>
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