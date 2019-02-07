import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Map from '../business_map/map';

class BusinessPageHeader extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { business, fetchBusiness, reviews } = this.props;
    if (!business) return null;

    const ratings = reviews.map(review => {
      return review.rating;
    });
    
    if(ratings.length === 0) return null;
    const totalRatings = ratings.reduce((a,b) => {
      return a + b;
    });

    const ratingAvg = totalRatings/reviews.length;

    const ratingAvgNum = () => {
      let rating;

      if (ratingAvg >= 4.6) {
        rating = "five";
      } else if (ratingAvg >= 4.3) {
        rating = "four-half";
      } else if (ratingAvg >= 3.6) {
        rating = "four";
      } else if (ratingAvg >= 3.3) {
        rating = "three-half";
      } else if (ratingAvg >= 2.6) {
        rating = "three";
      } else if (ratingAvg >= 2.3) {
        rating = "two-half";
      } else if (ratingAvg >= 1.6) {
        rating = "two";
      } else if (ratingAvg >= 1.3) {
        rating = "one-half";
      } else {
        rating = "one";
      }

      return rating;
    };

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
                    <div className="business-review-container">
                      <div className="avg-rating">
                        <div className="star-avg-rating rating-large" id={ratingAvgNum()}>
                        </div>

                        <div className="reviews-count">
                          {business.reviewsId.length} Reviews
                          {/* {ratingAvg} */}
                        </div>
                      </div>

                      <div className="ratings-details">
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
                        Catgories
                      </div>
                    </div>
                  </div>
                </div>

                <div className="top-header-right">
                  <div className="business-page-actions">
                    <Link className="business-write-review" to={`/businesses/${business.id}/reviews`}>
                      <i className="fas fa-star"></i>
                      <div className="write-review-btn-text">
                        Write a Review
                      </div>
                    </Link>

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

              <div className="top-subheader">
                <div className="top-map-container">
                  <div className="top-map">
                    <div className="map-map">
                      <Map
                        business={business}
                        fetchBusiness={fetchBusiness}
                        singleBusiness={true}
                      />
                    </div>

                    <div className="map-text">
                      <ul className="map-text-content">
                        <li className="text-address">
                          <div className="map-text-icon">
                            <i className="fas fa-map-marker-alt"></i>
                          </div>
                          
                          <div className="address">
                            <div className="street">
                              {business.address}
                            </div>
                            <div className="city-state">
                              {business.city}, {business.state}
                            </div>
                          </div>
                        </li>

                        <li className="text-direction">
                          <div className="map-text-icon">
                            <i className="fas fa-directions"></i>
                          </div>

                          <div className="get-directions">
                            Get Directions
                          </div>
                        </li>

                        <li className="text-phone-number">
                          <div className="map-text-icon">
                            <i className="fas fa-phone"></i>
                          </div>
                          
                          <div>
                            {business.phone_number}
                          </div>
                        </li>

                        <li className="text-link">website</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="top-pics-container">
                  <div className="top-pics-content">
                    <div className="top-background"></div>

                    <div className="top-pics-footer"></div>

                    <div className="pics-container">
                      <div className="pics-content">
                        <div className="pic">
                          <img id="first" src="./food.jpg" alt="food"/>
                        </div>

                        <div className="pic-middle">
                          <img id="middle" src="./gongcha.png" alt="gongcha"/>
                        </div>

                        <div className="pic">
                          <img id="last" src="./sushi.jpg" alt="sushi"/>
                        </div>
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