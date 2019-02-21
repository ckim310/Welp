import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewIndex from './reviews_index';
import { trashReview, updateReview } from '../../actions/review_actions';
import { fetchReactions } from '../../actions/reaction_actions';

const mapStateToProps = (state, ownProps) => {
  function sortUpdatedAt(a, b) {
    var dateA = new Date(a.updated_at).getTime();
    var dateB = new Date(b.updated_at).getTime();
    return dateA > dateB ? 1 : -1;
  }
  
  const reviews = Object.values(state.entities.reviews).sort(sortUpdatedAt);
  const currentUserId = state.session.currentUserId;
  const businessId = ownProps.match.params.businessId;

  return {
    reviews,
    currentUserId,
    businessId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    trashReview: (id) => dispatch(trashReview(id)),
    updateReview: (businessId, review) => dispatch(updateReview(businessId, review)),
    fetchReactions: (businessId, reviewId) => dispatch(fetchReactions(businessId, reviewId)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewIndex));