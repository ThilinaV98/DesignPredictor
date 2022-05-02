import React, { useEffect, useState } from "react";
import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
// import axios from "axios";

const columns = [
  { field: "_id", headerName: "ID", width: 70 },
  { field: "username", headerName: "User name", width: 130 },
  { field: "email", headerName: "Email", width: 230 },
  { field: "department", headerName: "Department", width: 130 },
  { field: "position", headerName: "Position", width: 130 },
];

export default function UserList() {
  let [rows, setRows] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((result) => {
        setRows(result);
      });
  });
  return (
    <div className="userList">
      <div className="userListContainer">
        <h3 className="userListTitle">Users</h3>
        <Link to="/user">
          <button className="userListButton">Add Users</button>
        </Link>
      </div>
      <DataGrid
        getRowId={(row) => row._id}
        rows={rows}
        columns={columns}
        pageSize={rows.length}
        rowsPerPageOptions={[rows.length]}
        // checkboxSelection
      />
    </div>
  );
}
