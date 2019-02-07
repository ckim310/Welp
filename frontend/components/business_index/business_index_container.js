import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { fetchBusinesses } from '../../actions/business_actions';
import { searchBusinesses } from '../../actions/search_actions';

const mapStateToProps = (state, ownProps) => {
  const businesses = Object.values(state.entities.businesses);
  const reviews = Object.values(state.entities.reviews);

  return {
    businesses,
    reviews,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBusinesses: () => dispatch(fetchBusinesses()),
    searchBusinesses: query => dispatch(searchBusinesses(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex);