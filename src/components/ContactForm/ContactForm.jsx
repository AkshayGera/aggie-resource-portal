import React, { useState } from "react";
import "./ContactForm.css";
import SubmissionModal from "../SubmissionModal/SubmissionModal";

const ContactForm = () => {
  const [showModal, setShowModal] = useState(false);
  const text =
    "Thank you for contacting us, we will get back to you as soon as possible.";
  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    handleClear();
    setShowModal(false);
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    message: "",
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
      name: "",
      email: "",
      category: "",
      message: "",
    });
  };

  return (
    <div className="form-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category of Problem:</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a Category</option>
            <option value="website">Report a problem with the website</option>
            <option value="listing">Report illegitimate listing</option>
            <option value="abuse">Report abuse</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

        <div className="form-group actions">
          <button className="btn btn-secondary" type="button" onClick={handleClear}>
            Clear
          </button>
          <button className="btn btn-success" type="button" onClick={handleShowModal}>
            Submit
          </button>
          <SubmissionModal text={text} show={showModal} onClose={handleCloseModal} />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
