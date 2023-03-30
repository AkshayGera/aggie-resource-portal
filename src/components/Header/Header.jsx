import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
    <div className="profile">
      <img src="profile-icon.png" alt="Profile Icon" />
      <div className="profile-dropdown">
        <ul>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Log Out</a></li>
        </ul>
      </div>
    </div>
    <h1>Aggie Resource Portal</h1>
    <p className="tagline">Aggies Serving Aggies</p>
  </header>
  );
}

export default Header;
