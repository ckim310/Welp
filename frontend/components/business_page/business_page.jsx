import React from 'react';
import BusinessPageHeaderContainer from './business_page_header_container';

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

export default BusinessPage;