import React,{useState} from "react";
import { FaCog, FaSignOutAlt } from "react-icons/fa";
import "./ProfilePicture.css";
import UnderConstructionModal from '../UnderConstructionModal/UnderConstructionModal';
import { Button } from "react-bootstrap";

function ProfilePicture({ image }) {

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
 
  return (
    <div className="profile-container">
      <div className="profile-picture-container">
        <img
          src={image}
          alt="Profile Picture"
          className="profile-picture"
        />
      </div>
      <div className="button-container">
       
        <FaCog style={{ color: "#198754" }} className="settings-icon"  onClick={handleShowModal}/>
        <FaSignOutAlt className="logout-icon"  onClick={handleShowModal}/>
        <UnderConstructionModal show={showModal} onClose={handleCloseModal} />
      </div>
    </div>
  );
}

export default ProfilePicture;
