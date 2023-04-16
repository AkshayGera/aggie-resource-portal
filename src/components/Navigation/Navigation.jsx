import React from "react";
import "./Navigation.css"; // import css file for styling
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className="navigation-panel">
      <Link to='/'><button className="home-button">Home</button></Link>
      <Link to='/about'>
      <button className="about-button">About</button>
      </Link>
    </div>
  );
}

export default Navigation;
