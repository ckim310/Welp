import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchBusiness } from '../../actions/business_actions';
import BusinessPageHeaderContainer from './business_page_header_container';
import SearchNavBar from '../nav_bar/search_nav_bar';
import SubNavBar from '../nav_bar/sub_nav_bar';
import BusinessPageReviews from './business_page_reviews';

class BusinessPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.businessId !== this.props.match.params.businessId) {
      this.props.fetchBusiness(this.props.match.params.businessId);
    }
  }

  render() {
    return (
      <div className="business-page-container">
        <SearchNavBar />
        <SubNavBar />
        <BusinessPageHeaderContainer props={this.props} />
        <BusinessPageReviews props={this.props}/>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    fetchBusiness: (id) => dispatch(fetchBusiness(id)),
  }
}

export default withRouter(connect(null, mapDispatchToProps)(BusinessPage));