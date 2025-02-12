import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/games">Games</Link>
      <Link to="/software">Software</Link>
      <Link to="/about">About</Link>
    </nav>
  )
};

export default Navbar;
