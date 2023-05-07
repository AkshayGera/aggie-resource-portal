import React, { useState } from "react";
import "./VerifiedLabel.css";
import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";

const VerifiedLabel = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  return (
    <div className="tick-container">
      <FaCheckCircle style={{ color: "#198754" }}/>
      <span className="tick-text">Verified for Authenticity</span>
      <FaInfoCircle style={{marginLeft:5,color:"gray"}} onMouseEnter={handleTooltip} onMouseLeave={handleTooltip} onTouchStart={handleTooltip} onTouchEnd={handleTooltip}/>
      {showTooltip && (
        <div className="tooltip">
          <span className="tooltip-text">
            The verified label on the posting means that the posting has been verified by our team for authenticity. Safety is our paramount concern which is why we take these verifications seriously.
          </span>
        </div>
      )}
    </div>
  );
};

export default VerifiedLabel;
