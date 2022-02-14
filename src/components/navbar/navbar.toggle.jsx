import React from "react";
import "./navbar.css";
const NavbarToggle = ({ active, menuState }) => {
  return (
    <div className="block md:hidden ">
      <button
        className={`menu-icon ${active ? "menu-icon--isActive" : ""}`}
        onClick={menuState}
      >
        <div className="menu-icon__bar"></div>
        <div className="menu-icon__bar"></div>
        <div className="menu-icon__bar"></div>
      </button>
    </div>
  );
};

export default NavbarToggle;
