import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "username", headerName: "User name", width: 130 },
  { field: "email", headerName: "Email", width: 130 },
  { field: "department", headerName: "Department", width: 130 },
  { field: "postition", headerName: "Postition", width: 130 },
];

const rows = [
  { id: 1, username: "Thilina Vithana", email: "thilinavithana98@gmail.com" , department:"Design" , postition:"Fashion Designer"},
];

export default function UserList() {
  return (
    <div className="userList">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
