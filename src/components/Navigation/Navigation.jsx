import React,{useState} from "react";
import "./Navigation.css"; // import css file for styling
import { Link, useLocation, NavLink } from 'react-router-dom';

function Navigation() {
 
  const navLinks = [
    {
      label: 'Home',
      to: '/',
    },
    {
      label: 'About Us',
      to: '/about',
    },
    {
      label: 'Settings',
      to: '/settings',
    },
    {
      label: 'Help',
      to: '/help',
    },
  ];
  const location = useLocation();
  const isNavLinkActive = (link) => {
    return link.to === location.pathname;
  };


  return (<>
   <nav className="navigation">
      <ul>
        {navLinks.map((link) => (
          <li key={link.to}>
            <NavLink
              exact
              to={link.to}
              activeClassName="active"
              className="home-button"
              isActive={() => isNavLinkActive(link)}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>

  </>
  );
}

export default Navigation;
