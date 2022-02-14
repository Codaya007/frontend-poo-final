import React from "react";
import { useLocation } from "react-router-dom";
import Button from "../button/button.component";
import NavItem from "./navbar.item";
import { connect } from "react-redux";
import { logout } from "../../data/actions";

const NavbarList = ({ logout = () => {}, isAuth = false }) => {
  // to define the actual route
  const location = useLocation();

  // make active nav item with text primary
  const isActive = (location, path) => {
    // console.log(location);
    if (location.pathname === path) {
      return { fontWeight: "bold" };
    } else {
      return {};
    }
  };

  return (
    <ul className="list-navbar">
      <NavItem link="/" name="Home" listStyle={isActive(location, "/")} />
      <NavItem
        link="/shop"
        name="Productos"
        listStyle={isActive(location, "/shop")}
      />
      <NavItem
        link="/dashboard"
        name="Dashboard"
        listStyle={isActive(location, "/dashboard")}
      />
      {isAuth && (
        <Button
          title="Salir"
          moreStyle="hover:text-primary"
          action={() => {
            logout();
          }}
        />
      )}
      {!isAuth && (
        <>
          <Button
            title="Login"
            moreStyle="hover:text-primary"
            isButton={false}
            href="/login"
          />
          <Button
            title="Registrarse"
            moreStyle="hover:text-primary"
            isButton={false}
            href="/register"
          />
        </>
      )}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(NavbarList);
