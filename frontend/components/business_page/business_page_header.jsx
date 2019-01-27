import React from 'react';
import { Link } from 'react-router-dom';

class BusinessPageHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    return (
      this.props.fetchBusiness(this.props.business.id)
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.businessId !== prevProps.match.params.businessId) {
      return this.props.fetchBusiness(this.props.business.id);
    }
  }

  render() {
    const { business } = this.props;
    
    return(
      <div className="business-page-header-container">
        <div className="business-page-header-wrapper">
          <div className="top">
          
            <div className="top-container">
              <div className="top-header">

                <div className="top-header-left">
                  <div className="top-header-title">
                    <h1 className="title-name">{business.name}</h1>
                    <div className="title-claim">
                      <i className="fas fa-check-circle"></i>
                       Claimed
                    </div>
                  </div>

                  <div className="top-header-avg-rating">
                    <div className="rating-container">
                      <div className="avg-rating-reviews">
                        <div className="star-avg-rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>

                        <div className="reviews-count">
                          # Review (placeholder)
                        </div>
                      </div>

                      <div className="rating-details">
                        <Link to={`/businesses/${business.id}`}>
                          <i className="fas fa-signal"></i>
                          Details
                        </Link>
                      </div>
                    </div>

                    <div className="price-category">
                      <div className="price">
                        $$ • <br/>
                      </div>

                      <div className="business-category">
                        Catgories!!!
                      </div>
                    </div>
                  </div>
                </div>

                <div className="top-header-right">
                  <div className="business-page-actions">
                    <a className="business-write-review" href="#">
                      <i className="fas fa-star"></i>
                      <div className="write-review-btn-text">Write a Review</div>
                    </a>

                    <div className="page-options">
                      <Link to={`/businesses/${business.id}`}>
                        <i className="fas fa-camera"></i>
                        Add Photo
                      </Link>

                      <Link to={`/businesses/${business.id}`}>
                        <i className="fas fa-share-square"></i>
                        Share
                      </Link>

                      <div className="bookmark">
                        <i className="fas fa-bookmark"></i>
                        Save
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default BusinessPageHeader;