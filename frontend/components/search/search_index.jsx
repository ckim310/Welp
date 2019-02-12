import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BusinessIndexItem from '../business_index/business_index_item';

class SearchIndex extends React.Component {
  constructor(props) {
    // debugger
    super(props);
  }

  render() {
    // debugger
    const businessesLi = this.props.businesses.map((business, idx) => {
      return <BusinessIndexItem key={business.id} business={business} idx={idx + 1} reviews={this.props.reviews} />
    });

    if (this.props.businesses == []) {
      return (
        <div className="search-header">
          Search Again
        </div>
      )
    }

    return (
      <div className="list">
        <div className="search-header-container">
          <div className="search-header-text">
            Search Result for 
          </div>
        </div>
        {businessesLi}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  
  const businesses = Object.values(state.entities.searches) || [];
  const reviews = Object.values(state.entities.reviews);
  debugger

  return {
    businesses,
    reviews,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBusinesses: () => dispatch(fetchBusinesses()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchIndex));