import React from "react";
import { FaCog, FaSignOutAlt } from "react-icons/fa";
import "./ProfilePicture.css";

function ProfilePicture({ image }) {
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
        <FaCog className="settings-icon" />
        <FaSignOutAlt className="logout-icon" />
      </div>
    </div>
  );
}

export default ProfilePicture;
