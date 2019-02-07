import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview, clearReviewErrors } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  const businessId = ownProps.match.params.businessId;
  const business = state.entities.businesses[businessId];
  const currentUserId = state.session.currentUserId;
  const errors = state.errors.review;
  const review = {body: "", rating: 0};
  const reviewId = null;

  return {
    businessId,
    business,
    currentUserId,
    errors,
    review,
    reviewId,
    formType: "Post Review",
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: (businessId, review) => dispatch(createReview(businessId, review)),
    clearReviewErrors: () => dispatch(clearReviewErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);