import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">Home</li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/products" className="link">
              <li className="sidebarListItem">Products</li>
            </Link>
          </ul>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">Users</li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Report</h3>
          <ul className="sidebarList">
            <Link to="report" className="link">
              <li className="sidebarListItem">Predict Report</li>
            </Link>
          </ul>
        </div>
        {/* <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <Link to="/user" className="link">
              <li className="sidebarListItem">Manage</li>
            </Link>
          </ul>
        </div> */}
      </div>
    </div>
  );
}
