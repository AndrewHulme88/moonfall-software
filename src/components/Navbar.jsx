import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="/images/MoonFallLogo.png" alt="logo" className="nav-logo"/>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/games" className="nav-link">Games</Link>
        <Link to="/software" className="nav-link">Software</Link>
        <Link to="/about" className="nav-link">About</Link>
      </div>
    </nav>
  )
};

export default Navbar;
