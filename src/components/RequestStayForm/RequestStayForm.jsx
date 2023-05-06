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
      <div className="form-group actions">
          <button className="btn btn-secondary" type="reset">
            Clear
          </button>
          <button className="btn btn-success" type="button" onClick={handleShowModal}>
            Submit
          </button>
          <SubmissionModal gohome={true}  show={showModal} onClose={handleCloseModal} />
        </div>
      {/* <div className="form-row">
        
      </div> */}
     
    </form>
  );
}

export default RequestStayForm;
