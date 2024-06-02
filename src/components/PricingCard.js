import React, { useState } from 'react';
import './PricingCard.css';

const PricingCard = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [pageviews, setPageviews] = useState(100000); // Initial pageviews value

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  const handleSliderChange = (event) => {
    setPageviews(event.target.value * 1000); // Update pageviews based on slider value
  };

  const calculatePrice = () => {
    const basePrice = pageviews / 10000; // Example calculation: $1 per 10,000 pageviews
    return isYearly ? (basePrice * 0.75).toFixed(2) : basePrice.toFixed(2); // Apply 25% discount for yearly billing
  };

  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <h2>Simple, traffic-based pricing</h2>
        <p>Sign-up for our 30-day trial. No credit card required.</p>
      </div>
      <div className="pricing-card">
        <div className="pricing-details">
          <p>{pageviews.toLocaleString()} PAGEVIEWS</p>
          <h1>
            ${calculatePrice()} <span>/ month</span>
          </h1>
          <div className="slider-container">
            <input
              type="range"
              min="1"
              max="100"
              className="slider"
              value={pageviews / 1000}
              onChange={handleSliderChange}
            />
          </div>
          <div className="billing-options">
            <label className="toggle-switch">
              <input type="checkbox" checked={isYearly} onChange={handleToggle} />
              <span className="slider-toggle"></span>
            </label>
            <span className="billing-label">{isYearly ? 'Yearly Billing' : 'Monthly Billing'}</span>
            {isYearly && <span className="discount">25% discount</span>}
          </div>
        </div>
        <hr className="divider" />
        <div className="features">
          <ul>
            <li>Unlimited websites</li>
            <li>100% data ownership</li>
            <li>Email reports</li>
          </ul>
        </div>
        <button className="trial-button">Start my trial</button>
      </div>
    </div>
  );
};

export default PricingCard;
