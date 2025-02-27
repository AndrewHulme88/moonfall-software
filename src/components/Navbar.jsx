import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="/images/MoonFallLogo.png" alt="logo" className="nav-logo"/>
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>Home</NavLink>
        <NavLink to="/games" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>Games</NavLink>
        <NavLink to="/software" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>Software</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>About</NavLink>
      </div>
      <div className="social-icons">
        <a href="https://www.instagram.com/moonfallsoftware/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} className="icon"/>
        </a>
        <a href="https://x.com/MoonFallSoft" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faXTwitter} className="icon"/>
        </a>
      </div>
    </nav>
  )
};

export default Navbar;
