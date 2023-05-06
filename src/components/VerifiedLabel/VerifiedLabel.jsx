import React from 'react';
import './VerifiedLabel.css';
import tickIcon from './tick.svg';
import { FaCheckCircle } from 'react-icons/fa';

const VerifiedLabel = () => {
  return (
    <div className="tick-container">
    
      <FaCheckCircle style={{ color: "#198754" }}/>
      <span className="tick-text">Verified</span>
    </div>
  );
};

export default VerifiedLabel;
