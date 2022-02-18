import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import NavItem from "./navbar.item";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../data/actions";
import { Nav } from "react-bootstrap";

const NavbarList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Nav className="me-auto">
      <NavItem link="/" name="Home" listStyle={isActive(location, "/")} />
      {isAuth && user && user.role === 1 && (
        <NavItem
          link="/dashboard/admin"
          name="Dashboard"
          listStyle={isActive(location, "/dashboard/admin")}
        />
      )}
      <NavItem
        link="/cart"
        name="Carrito"
        listStyle={isActive(location, "/cart")}
      />
      {isAuth && (
        <>
          <NavItem
            link="/user"
            name="Mi perfil"
            listStyle={isActive(location, "/user")}
          />
          <Button
            title="Salir"
            moreStyle="hover:text-primary"
            action={handleLogout}
          />
        </>
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
    </Nav>
  );
};

export default NavbarList;
