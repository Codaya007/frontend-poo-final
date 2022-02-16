import React from "react";
import { useLocation } from "react-router-dom";
import Button from "../button/button.component";
import NavItem from "./navbar.item";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../data/actions";

const NavbarList = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
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
      {isAuth && user.rol === 1 && (
        <NavItem
          link="/dashboard"
          name="Dashboard"
          listStyle={isActive(location, "/dashboard")}
        />
      )}
      <NavItem
        link="/cart"
        name="Carrito"
        listStyle={isActive(location, "/cart")}
      />
      <NavItem
        link="/user"
        name="Mi perfil"
        listStyle={isActive(location, "/user")}
      />
      {isAuth && (
        <Button
          title="Salir"
          moreStyle="hover:text-primary"
          action={() => dispatch(logout())}
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

export default NavbarList;
