import React from "react";
import { Link } from "react-router-dom";
import Container from "../container/container.component";
import NavbarList from "./navbar.list";

const Navbar = () => {
  return (
    <Container>
      <nav className="navbar">
        {/* Left navbar Side */}
        <div>
          <Link to="/">
            <img
              className="logo"
              src={require("../../assets/logo.png")}
              alt="Main Logo"
            />
          </Link>
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
