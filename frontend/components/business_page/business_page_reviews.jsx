import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { createReview } from '../../actions/review_actions';
import ReviewIndexContainer from '../reviews/review_index_container';

class BusinessPageReviews extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { business } = this.props;

    if (!business) return null;

    return (
      <div className="reviews-wrapper">
        <div className="reviews-feed-container">
          <div className="feed-header-containter">
            <div className="feed-header-content">
              <h2 className="feed-header">
                Recommended Reviews
                <b> for {business.name}</b>
              </h2>

              <div className="feed-banner-container">
                <div className="feed-banner-content">
                  <div className="feed-banner-icon">
                    <i className="fab fa-yelp"></i>
                  </div>

                  <div className="feed-banner-text">
                    <span className="banner-text">
                      <strong className="banner-text-bold">
                        Your trust is my top concern, 

                      </strong>
                      &nbsp;this is a clone of yelp and all code written
                      for this clone was written by Christine Kim.
                      <a href="https://www.linkedin.com/in/christine-kim-46857544/"> Learn more about Christine.</a>
                    </span>
                  </div>

                  <div className="feed-banner-x">
                    <span className="banner-close">
                      &times;
                    </span>
                  </div>
                </div>
              </div>

              <div className="feed-search-container">
                <div className="feed-search">
                </div>
              </div>
            </div>
          </div>

          <div className="review-form">
            <Link to={`/businesses/${this.props.match.params.businessId}/reviews`} >
              Start your review of {this.props.business.name}
            </Link>
          </div>

          <div className="reviews-list-container">
            <ReviewIndexContainer />
          </div>

          <div className="review-page-no-container"></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const businessId = ownProps.props.match.params.businessId;
  const business = state.entities.businesses[businessId];

  return {
    business
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBusiness: (id) => dispatch(fetchBusiness(id)),
    createReview: (businessId, review) => dispatch(createReview(businessId, review)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BusinessPageReviews));