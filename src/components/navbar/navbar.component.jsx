import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../container/container.component";
import NavbarList from "./navbar.list";
import NavbarToggle from "./navbar.toggle";

const Navbar = () => {
  // implent toggle state
  const [active, setActive] = useState(false);
  // toggle Controller
  const menuState = () => {
    setActive(!active);
  };

  return (
    <Container>
      <nav className="navbar">
        {/* Left navbar Side */}
        <div>
          <Link to="/">
            <img
              className="logo-main"
              src={require("../../assets/logo.png")}
              alt="Main Logo"
            />
          </Link>
          <NavbarToggle active={active} menuState={menuState} />
        </div>

        {/* Right navbar Side */}
        <div>
          <NavbarList />
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
