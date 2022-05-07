import React, { useEffect, useState } from "react";
import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
const columns = [
  // { field: "_id", headerName: "ID", width: 70 },
  { field: "id", headerName: "ID", width: 70 },
  { field: "quantity", headerName: "Quantity", width: 130 },
  { field: "price", headerName: "Price", width: 130 },
  { field: "img", headerName: "Image", width: 130 },
  {
    field: "action",
    headerName: "action",
    width: 130,
    renderCell: (params) => {
      return (
        <><Link to={{pathname:"/products/" + params.row._id}}>
          <button className="productListEdit">Edit</button>
        </Link>
        <Link to="/productDelete">
            <button className="productListDelete">Delete</button>
          </Link></>
      );
    },
  }
];

export default function ProductList(){
  let [rows, setRows] = useState({});
  // console.log("this.rows::::::"+this.rows)

  useEffect(() => {
    fetch(`http://localhost:5000/products`)
      .then((res) => res.json())
      .then((result) => {
        setRows(result);
      });
  }, []);
  return (
    <div className="productList">
      <div className="productListContainer">
        <h3 className="productListTitle">Prodcuts</h3>
        <Link to="/newProduct">
          <button className="productListButton">Add Product</button>
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
