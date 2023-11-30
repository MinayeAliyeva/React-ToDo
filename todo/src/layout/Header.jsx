import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <Link to="">Home</Link> <br />
      <br />
      <Link to="/users">Users</Link>
    </header>
  );
};

export default Header;
