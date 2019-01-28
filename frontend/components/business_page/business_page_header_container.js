import { connect } from 'react-redux';
import BusinessPageHeader from './business_page_header';
import { fetchBusiness, fetchBusinesses } from '../../actions/business_actions';

const mapStateToProps = (state, ownProps) => {
  const businessId = ownProps.props.match.params.businessId;
  const business = state.entities.businesses[businessId];
  
  return {
    business,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBusinesses: () => dispatch(fetchBusinesses()),
    fetchBusiness: (id) => dispatch(fetchBusiness(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessPageHeader);