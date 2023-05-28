import React from "react";
import { Link } from "react-router-dom";
import homeImg from "../homeImg.png";

const Navbar = () => {
  return (
    <div>
      <Link to="/">
        <img src={homeImg} alt="HomeImage"/>
      </Link>
    </div>
  );
};

export default Navbar;
