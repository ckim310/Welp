import React from 'react';
import { Route } from 'react-router-dom';
import BusinessIndexItem from './business_index_item';
import SearchNavBar from '../nav_bar/search_nav_bar';
import BusinessPage from '../business_page/business_page';

class BusinessIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBusinesses();
  }

  render() {
    const businessesLi = this.props.businesses.map((business, idx) => {
      return <BusinessIndexItem key={business.id} business={business} idx={idx + 1} />
    });

    return (
      <div className="businesses-list-container">
        <SearchNavBar />
        <Route
          path="/businesses/:businessId"
          component={BusinessPage}
        />
        <ul className="businesses-list">
          {businessesLi}
        </ul>
      </div>
    )
  }
}

export default BusinessIndex;