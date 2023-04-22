import React, { useState } from 'react';
import './RequestFoodForm.css';
import SubmissionModal from '../SubmissionModal/SubmissionModal';

const RequestFoodForm = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const [formData, setFormData] = useState({
    pickupDate: '',
    pickupTime: '',
    pickupPersonName: '',
    otherComments: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value,
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleClear = () => {
    setFormData({
      pickupDate: '',
      pickupTime: '',
      pickupPersonName: '',
      otherComments: '',
    });
  };

  return (
    <div className="form-container">
      <h2>Please fill in details for the provider to review</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Pickup Date:</label>
          <input
            type="date"
            name="pickupDate"
            value={formData.pickupDate}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Pickup Time:</label>
          <input
            type="time"
            name="pickupTime"
            value={formData.pickupTime}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Name of Person Picking Up:</label>
          <input
            type="text"
            name="pickupPersonName"
            value={formData.pickupPersonName}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Other comments (if any):</label>
          <textarea
            name="otherComments"
            value={formData.otherComments}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group actions">
          <button className="btn btn-secondary" type="button" onClick={handleClear}>
            Clear
          </button>
          <button className="btn btn-success" type="button" onClick={handleShowModal}>
            Submit
          </button>
          <SubmissionModal show={showModal} onClose={handleCloseModal} />
        </div>
      </form>
    </div>
  );
};

export default RequestFoodForm;
