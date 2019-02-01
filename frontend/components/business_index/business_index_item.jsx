import React from 'react';
import { Link } from 'react-router-dom';

const BusinessIndexItem = ({ business, idx }) => {
  return (
  <li className="business-index-item">
    <div className="business-index-content-container">
      <div className="business-index-pic">
        <img src="egg.png" alt="egg"/>
      </div>
        <h3 className="business-name">{idx}. <Link to={`/businesses/${business.id}`}>{business.name}</Link></h3>

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
  </li>
  )
}

export default BusinessIndexItem;