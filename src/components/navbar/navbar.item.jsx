import React from "react";
import { Link } from "react-router-dom";
const NavItem = ({ link, listStyle, name }) => {
  return (
    <li className="item-navbar">
      <Link to={link}>
        <span style={listStyle}>{name}</span>
      </Link>
    </li>
  );
};

export default NavItem;
