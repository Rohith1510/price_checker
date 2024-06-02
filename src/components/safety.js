import React, { useState } from 'react';
import './PricingCard.css';

const PricingCard = () => {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  return (
    <div className="container">
      <div className="pricing-card">
        <div className="header">
          <h3>Simple, traffic-based pricing</h3>
          <p>Sign-up for our 30-day trial. No credit card required.</p>
        </div>
        <div className="content">
          <div className="pageviews">
            <p>100K PAGEVIEWS</p>
          </div>
          <div className="price">
            {isYearly ? '$12.00' : '$16.00'}
            <span>/month</span>
          </div>
          <div className="slider-container">
            <input type="range" min="0" max="100" className="slider" />
          </div>
          <div className="billing-options">
            <label>
              <input type="radio" name="billing" value="monthly" />
              Monthly Billing
            </label>
            <label className="radio-switch">
              <input type="radio" name="billing" value="yearly" />
              Yearly Billing <span className="discount">25% discount</span>
            </label>
          </div>
          <div className="features">
            <ul>
              <li>Unlimited websites</li>
              <li>100% data ownership</li>
              <li>Email reports</li>
            </ul>
          </div>
          <button className="start-trial">Start my trial</button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;