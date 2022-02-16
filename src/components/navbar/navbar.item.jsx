import React from "react";
import { Link } from "react-router-dom";
const NavItem = ({ link, icon, listStyle, name }) => {
  return (
    <li className="item-navbar">
      <Link to={link}>
        {icon && <span>{icon}</span>}
        <span style={listStyle}>{name}</span>
      </Link>
    </li>
  );
};

export default NavItem;
