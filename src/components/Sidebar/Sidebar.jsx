import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        overflow: "scroll initial",
        position: "fixed",
      }}
      className="sidebar-container"
    >
      <CDBSidebar className="sidebar">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="StoreName">
            The Gadget Zone
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">HOME</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/signin" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">SIGN IN</CDBSidebarMenuItem>
            </NavLink>
            {/* <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
            </NavLink> */}
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter>
          <div className="sidebar-footer">
            <CDBSidebarMenu>
              <CDBSidebarContent>
                <NavLink exact to="/" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="question">Help</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="book">
                    Contact Us
                  </CDBSidebarMenuItem>
                </NavLink>
              </CDBSidebarContent>
            </CDBSidebarMenu>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
