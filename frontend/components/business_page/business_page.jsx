import React from 'react';
import { connect } from 'react-redux';
import BusinessPageHeaderContainer from './business_page_header_container';
import { fetchBusinesses } from '../../util/business_api_util';

class BusinessPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="business-page-container">
        <BusinessPageHeaderContainer props={this.props} />
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    fetchBusinesses: () => dispatch(fetchBusinesses()),
  }
}

export default connect(null, mapDispatchToProps)(BusinessPage);