import React, { useState } from 'react';
import './AccommodationForm.css';
import SubmissionModal from '../SubmissionModal/SubmissionModal';

const AccommodationForm = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    handleClear();
    setShowModal(false);
  };
  const [formData, setFormData] = useState({
    dateFrom: '',
    dateTo: '',
    accommodationTitle: '',
    description: '',
    address: '',
    image: null,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
      setFormData({
        ...formData,
        [name]: value,
      });
  };

  const handleFileUpload = (event) => {
    setFormData({
      ...formData,
      image: event.target.files[0],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleClear = () => {
    setFormData({
      dateFrom: '',
      dateTo: '',
      accommodationTitle: '',
      description: '',
      address: '',
      image: null,
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Date Available:</label>
          <input
            type="date"
            name="dateFrom"
            value={formData.dateFrom}
            onChange={handleInputChange}
          />
          <label>Date To:</label>
          <input
            type="date"
            name="dateTo"
            value={formData.dateTo}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Accommodation Title:</label>
          <input
            type="text"
            name="accommodationTitle"
            value={formData.accommodationTitle}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Upload Image:</label>
          <input type="file" name="image" onChange={handleFileUpload} />
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

export default AccommodationForm;
