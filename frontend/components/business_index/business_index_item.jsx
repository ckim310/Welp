import React from 'react';

const BusinessIndexItem = ({ business, idx }) => (
  <li className="business-index-item">
    <div className="business-index-content-container">
      <h3 className="business-name">{idx}. {business.name}</h3>

      <div className="business-detail">
        <div className="business-phone-num">
          {business.phone_number}
        </div>

        <div className="business-address">
          {business.address}
        </div>
      </div>

    </div>
  </li>
)

export default BusinessIndexItem;