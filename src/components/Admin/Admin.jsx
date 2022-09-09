import React from "react";
import { Link, Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <div>Admin</div>
      <Link to="users">Users</Link>
      <Outlet />
    </>
  );
};

export default Admin;
