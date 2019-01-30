import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewIndex from './reviews_index';

const mapStateToProps = state => {
  const reviews = Object.values(state.entities.reviews);
  return {
    reviews
  };
};

export default withRouter(connect(mapStateToProps, null)(ReviewIndex));