import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import BusinessIndexItem from '../business_index/business_index_item';
import { clearSearchErrors } from '../../actions/search_actions';
import Map from '../business_map/map';

class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.clearSearchErrors();
  }

  render() {

    if (!this.props.searches[0]) {
      return <Redirect to="/businesses" />
    }

    const businessesLi = this.props.searches.map((business, idx) => {
      return <BusinessIndexItem key={business.id} business={business} idx={idx + 1} reviews={this.props.reviews} />
    });

    const errors = this.props.errors.map((err, idx) => {
      return <li className="search-errors-list" key={idx}>{err}</li>
    })

    return (
      <div className="business-index-content-container">
        <div className="business-index-content">
          <ul className="businesses-list">
            <div className="search-header-container">

              <div className="search-header-text">
                {errors}
              </div>
            </div>
            {businessesLi}
          </ul>

          <div className="index-map">
            <Map searches={this.props.searches}/>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  
  const searches = Object.values(state.entities.searches);
  const reviews = Object.values(state.entities.reviews);
  const errors = state.errors.search;

  return {
    searches,
    reviews,
    errors,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearSearchErrors: () => dispatch(clearSearchErrors()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchIndex));