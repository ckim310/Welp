import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { fetchBusinesses } from '../../actions/business_actions';
import { searchBusinessesFind, searchBusinessesNear } from '../../actions/search_actions';

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
    searchBusinessesFind: (queryFind, queryNear) => dispatch(searchBusinessesFind(queryFind, queryNear)),
    searchBusinessesNear: queryNear => dispatch(searchBusinessesNear(queryNear)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex);