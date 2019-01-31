import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewIndex from './reviews_index';
import { trashReview } from '../../actions/review_actions';

const mapStateToProps = state => {
  const reviews = Object.values(state.entities.reviews);
  const currentUserId = state.session.currentUserId;

  return {
    reviews,
    currentUserId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    trashReview: (id) => dispatch(trashReview(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewIndex));