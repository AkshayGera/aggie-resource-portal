import React, { useState } from "react";
import './ContactForm.css'
import SubmissionModal from "../SubmissionModal/SubmissionModal";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // add your logic for submitting the form data to a server or database here
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="category">Category of Problem:</label>
        <select
          id="category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select a Category</option>
          <option value="website">Report a problem with the website</option>
          <option value="listing">Report illegitimate listing</option>
          <option value="abuse">Report abuse</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <div className="form-actions">
          <button className='btn btn-secondary' type="button" >Clear</button>
          <button className="btn btn-success" onClick={handleShowModal} type="submit">Send</button>
          <SubmissionModal gohome={false} text={"Thank you for submitting a response, we will get in touch with you shortly!"} show={showModal} onClose={handleCloseModal} />
        </div>

      </form>
    </div>
  );
};

export default ContactForm;
