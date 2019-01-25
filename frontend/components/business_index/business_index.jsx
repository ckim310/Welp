import React from 'react';
import BusinessIndexItem from './business_index_item';

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
        <ul className="businesses-list">
          {businessesLi}
        </ul>
      </div>
    )
  }
}

export default BusinessIndex;