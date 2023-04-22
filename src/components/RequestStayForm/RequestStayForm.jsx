import React,{useState} from 'react';
import './RequestStayForm.css';
import SubmissionModal from '../SubmissionModal/SubmissionModal';

function RequestStayForm() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <form className="form">
      <h2 className="form-header">Please fill in details for the host to review</h2>
      <div className="form-row">
        <label className="form-label">Dates Required</label>
        <div className="form-field">
          <input type="date" className="form-input" />
          <input type="date" className="form-input" />
        </div>
      </div>
      <div className="form-row">
        <label className="form-label">Accessibility requirements</label>
        <div className="form-field">
          <input type="text" className="form-input" />
        </div>
      </div>
      <div className="form-row">
        <label className="form-label">Request Pick Up</label>
        <div className="form-field">
          <input type="checkbox" id="pickup-checkbox" className="form-checkbox" />
          <label htmlFor="pickup-checkbox" className="form-checkbox-label">
            Ticking the checkbox does not guarantee pickup
          </label>
        </div>
      </div>
      <div className="form-row">
        <label className="form-label">Your Location</label>
        <div className="form-field">
          <input type="text" className="form-input" />
        </div>
      </div>
      <div className="form-row">
        <label className="form-label">Other Comments (if any)</label>
        <div className="form-field">
          <textarea className="form-textarea"></textarea>
        </div>
      </div>
      <div className="form-row">
        <button type="reset" className="form-button">Clear Form</button>
      </div>
      <div className="form-row">
        <button type="button" className="form-button" onClick={handleShowModal}>Submit</button>
      </div>
      <SubmissionModal show={showModal} onClose={handleCloseModal} />
    </form>
  );
}

export default RequestStayForm;
