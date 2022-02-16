import React from "react";
import { useSelector } from "react-redux";
import Loader from "../components/loader/Loader";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const isLoading = useSelector((state) => state.auth.loading);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <img className="logo" src={user.avatar} alt="Profile" />
          <div className="section">
            <div className="subtitle">Nombre</div>
            <div className="profile-info">{user.name}</div>
          </div>
          <div className="section">
            <div className="subtitle">Apellido</div>
            <div className="profile-info">{user.lastname}</div>
          </div>
          <div className="section">
            <div className="subtitle">Email</div>
            <div className="profile-info">{user.email}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
