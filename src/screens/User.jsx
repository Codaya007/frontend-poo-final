import React, { useState } from "react";
import Orders from "./Orders";
import Profile from "./Profile";

const NavbarUser = ({ handlePage }) => {
  return (
    <ul className="list-navbar">
      <div onClick={(e) => handlePage("profile")}>Mi perfil</div>
      <div onClick={(e) => handlePage("orders")}>Mis pedidos</div>
    </ul>
  );
};

const User = () => {
  const [page, setPage] = useState("profile");
  return (
    <div>
      <NavbarUser handlePage={(page) => setPage(page)} />
      <div>{page === "profile" ? <Profile /> : <Orders />}</div>
    </div>
  );
};

export default User;
