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
    const { business, currentUser } = this.props;

    if (!business) return null;

    let currentUserData;
    if (currentUser) {
      currentUserData =
        <div className="review-current-user-data">
          <div className="review-current-user-pic">
            <i className="fas fa-meh fa-3x"></i>
          </div>
          <div className="review-form-current-user-name-location">
            <div className="review-current-user-name">
              {currentUser.first_name}
            </div>

            <div className="review-current-user-location">
              {currentUser.zipcode}
            </div>
          </div>
        </div>
    } else {
      currentUserData =
        <div className="review-current-user-data">
          <div className="review-no-user-pic">
            <i className="fas fa-meh fa-3x"></i>
          </div>
          <div className="review-form-no-user">
            <i className="fas fa-grip-lines fa-3x"></i>
            <i className="fas fa-grip-lines fa-2x"></i>
          </div>
        </div>
    };

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
                </div>
              </div>

              <div className="feed-search-container">
                <div className="feed-search">
                </div>
              </div>
            </div>
          </div>

          <div className="business-page-review-form">
            <div className="review-current-user-side">
              {currentUserData}
            </div>

            <div className="review-form-input">
              <Link to={`/businesses/${this.props.match.params.businessId}/reviews`} >
                Start your review of <span id="business-name">{this.props.business.name}</span>
              </Link>
            </div>
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
  const currentUserId = state.session.currentUserId;
  const currentUser = state.entities.users[currentUserId];

  return {
    business,
    currentUser,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBusiness: (id) => dispatch(fetchBusiness(id)),
    createReview: (businessId, review) => dispatch(createReview(businessId, review)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BusinessPageReviews));