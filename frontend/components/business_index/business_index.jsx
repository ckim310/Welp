import React from 'react';
import { Route } from 'react-router-dom';
import BusinessIndexItem from './business_index_item';
import SearchNavBar from '../nav_bar/search_nav_bar';
import BusinessPage from '../business_page/business_page';
import Map from '../business_map/map';
import SubNavBar from '../nav_bar/sub_nav_bar';

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
        <SubNavBar />
        <Route
          path="/businesses/:businessId"
          component={BusinessPage}
        />
        <div className="business-index-content-container">
          <div className="business-index-content">
            <ul className="businesses-list">
              {businessesLi}
            </ul>
            <div className="index-map">
              <Map />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BusinessIndex;