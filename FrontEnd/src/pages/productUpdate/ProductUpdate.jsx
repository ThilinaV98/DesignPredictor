import "./productUpdate.css";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ProductUpdate() {
  let [row, setRows] = useState({});
  const location = useLocation();
  const pathName = location.pathname;
  let parts = pathName.split("/");
  const productId = parts[2];
  useEffect(() => {
    fetch(`http://localhost:5000/products/${productId}`)
      .then((res) => res.json())
      .then((result) => {
        setRows(result);
      });
  }, [productId]);
  function handleSubmit(e) {
    e.preventDefault();
    const {quantity, price, img } = e.target.elements;
    axios.patch(`http://localhost:5000/products/${productId}`, {
      quantity: quantity.value,
      price: price.value,
      img: img.value,
    });
  }
  return (
    <div className="productUpdate">
      <div className="productUpdateTitleContainer">Update Product</div>
      <div className="productUpdateAdd">
        <span className="productUpdateAddTitle">Edit Details</span>
        <form
          className="productUpdateAddForm"
          onSubmit={handleSubmit}
          action="POST"
        >
          <div className="productUpdateAddLeft">
            <div className="productUpdateAddItem">
              <label>Quantity</label>
              <input
                id="quantity"
                type="text"
                placeholder={row.quantity}
                className="productUpdateAddInputs"
              ></input>
            </div>
            <div className="productUpdateAddItem">
              <label>Price</label>
              <input
                id="price"
                type="text"
                placeholder={row.price}
                className="productUpdateAddInputs"
              ></input>
            </div>
            <div className="productUpdateAddItem">
              <label>Image</label>
              <input
                id="img"
                type="file"
                className="productUpdateAddInputs"
              ></input>
            </div>
          </div>
          <div className="productUpdateAddRight">
            <div className="productUpdateAddItem"></div>
            <button
              className="productUpdateAddButton"
              onClick={() => alert("Product updated Successfully!")}
            >
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
