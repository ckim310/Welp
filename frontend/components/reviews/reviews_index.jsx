import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const reviews = this.props.reviews.map((review, idx) => {
      return <ReviewIndexItem review={review} key={idx} />
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