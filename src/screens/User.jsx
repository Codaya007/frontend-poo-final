import React, { useEffect, useState } from "react";
import Orders from "./Orders";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NavbarUser = ({ handlePage }) => {
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const isLoading = useSelector((state) => state.auth.loadingAuth);

  useEffect(() => {
    if (!isAuth && !isLoading) navigate("/");
  }, [isAuth, navigate, isLoading]);

  return (
    <ul className="list-navbar">
      <div onClick={(e) => handlePage("profile")}>Mi perfil</div>
      <div onClick={(e) => handlePage("orders")}>Mis pedidos</div>
    </ul>
  );
};

const User = () => {
  const [page, setPage] = useState("orders");

  return (
    <div>
      <NavbarUser handlePage={(page) => setPage(page)} />
      <div>{page === "profile" ? <Profile /> : <Orders />}</div>
    </div>
  );
};

export default User;
