import React from 'react';
import './UnderConstructionModal.css';

function UnderConstructionModal(props) {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal-header">
          <img src={props.logo} alt="logo" className="modal-logo" />
          <button className="close-button" onClick={props.onClose}>X</button>
        </div>
        <div className="modal-body">
          <p>This region is under construction</p>
        </div>
        <div className="modal-footer">
          <button className="back-button" onClick={props.onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default UnderConstructionModal;
