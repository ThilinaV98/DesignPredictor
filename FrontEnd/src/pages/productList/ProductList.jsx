import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "username", headerName: "User name", width: 130 },
  { field: "email", headerName: "Email", width: 130 },
  { field: "department", headerName: "Department", width: 130 },
  { field: "postition", headerName: "Postition", width: 130 },
];

const rows = [
  {
    id: 1,
    username: "Thilina Vithana",
    email: "thilinavithana98@gmail.com",
    department: "Design",
    postition: "Fashion Designer",
  },
];

export default function ProductList() {
  return (
    <div className="productList">
      <div className="productListContainer">
        <h3 className="productListTitle">Prodcuts</h3>
        <Link to="/newProduct">
          <button className="productListButton">Add Product</button>
        </Link>
      </div>
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
