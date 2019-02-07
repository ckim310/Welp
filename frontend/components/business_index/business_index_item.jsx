import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const BusinessIndexItem = ({ business, idx }) => {

  const businessReviewCount = business.reviewsId.length;

  if (!business.reviewRating) return null;
  const allRatings = business.reviewRating.map(review => {
    return review.rating;
  });

  let avgRatings
  if (allRatings.length > 0) {
    const sumRatings = allRatings.reduce( (a,b) => {
      return a + b;
    });
  
    avgRatings = sumRatings/(allRatings.length);
  } else {
    avgRatings = 0;
  }

  const ratingAvgNum = () => {
    let rating;

    if (avgRatings >= 4.6) {
      rating = "five";
    } else if (avgRatings >= 4.3) {
      rating = "four-half";
    } else if (avgRatings >= 3.6) {
      rating = "four";
    } else if (avgRatings >= 3.3) {
      rating = "three-half";
    } else if (avgRatings >= 2.6) {
      rating = "three";
    } else if (avgRatings >= 2.3) {
      rating = "two-half";
    } else if (avgRatings >= 1.6) {
      rating = "two";
    } else if (avgRatings >= 1.3) {
      rating = "one-half";
    } else if (avgRatings > 0) {
      rating= "one";
    } else {
      rating = "zero";
    }

    return rating;
  };

  return (
  <li className="business-index-item">
    <div className="business-index-content-container">
      <div className="business-index-pic">
        <img src="egg.png" alt="egg"/>
      </div>

      <div className="business-information-container">
        <div className="business-name-reviews">
          <h3 className="business-name">{idx}. <Link to={`/businesses/${business.id}`}>{business.name}</Link></h3>

          <div className="business-reviews">
              <div className="star-avg-rating rating-large" id={ratingAvgNum()}>
              </div>
            {businessReviewCount} Reviews
            
          </div>
        </div>

        <div className="business-detail">
          <div className="business-phone-num">
            {business.phone_number}
          </div>

          <div className="business-address">
            <div className="street">
              {business.address}
            </div>

            <div className="city">
              {business.city}
            </div>
          </div>
        </div>

      </div>
    </div>
  </li>
  )
}

export default BusinessIndexItem;