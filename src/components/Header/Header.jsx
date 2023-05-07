import React from 'react';
import './Header.css';
import logo from '../../media/Logo_Website_ARP.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to={"/"} className='logoheader'>
      <div className="header-container">
        <img className='header-img' src={logo} alt="Logo" />
        <div className="header-text">
          <h1>Aggie Resource Portal</h1>
          <div className='taglinecontainer'><p className="tagline">Aggies Serving Aggies</p></div>
        </div>
      </div>
      </Link>
    </header>
  );
}


export default Header;
