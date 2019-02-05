import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { fetchBusinesses, searchBusinesses } from '../../actions/business_actions';

const mapStateToProps = (state, ownProps) => {
  const businesses = Object.values(state.entities.businesses);
  return {
    businesses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBusinesses: () => dispatch(fetchBusinesses()),
    searchBusinesses: query => dispatch(searchBusinesses(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex);