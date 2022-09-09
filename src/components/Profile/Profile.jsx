import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth";

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSignout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <div>
      <h1>Welcome {auth.user}</h1>
      <button onClick={handleSignout}>Sign Out</button>
    </div>
  );
};

export default Profile;
