import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { updateReview, clearReviewErrors } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  const reviewId = ownProps.match.params.reviewId;
  const review = state.entities.reviews[reviewId] || {body: null, rating: null};
  const businessId = ownProps.match.params.businessId;
  const business = state.entities.businesses[businessId];
  const currentUserId = state.session.currentUserId;
  const errors = state.errors.review;

  return {
    review,
    reviewId,
    businessId,
    business,
    currentUserId,
    errors,
    formType: "Update Review",
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: (businessId, review) => dispatch(updateReview(businessId, review)),
    clearReviewErrors: () => dispatch(clearReviewErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);