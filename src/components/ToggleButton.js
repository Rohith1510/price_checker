import React, { useState } from 'react';
import './ToggleButton.css';

const ToggleButton = ({ isSelected, onChange, label, discount }) => {
  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        checked={isSelected}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="slider"></span>
      {label} {discount && <span className="discount">{discount}</span>}
    </label>
  );
};

export default ToggleButton;
