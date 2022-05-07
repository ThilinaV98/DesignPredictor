import "./productUpdate.css";
import axios from "axios";

function handleSubmit(e) {
  e.preventDefault();
  const { id, quntity, price, img } = e.target.elements;
  // console.log({ id: id.value, quntity: quntity.value, price: price.value, img: img.value});
  axios.post("http://localhost:5000/products", {
    id: id.value,
    quntity: quntity.value,
    price: price.value,
    img: img.value,
  });
}

export default function ProductUpdate() {
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
              <label>Quntity</label>
              <input
                id="quntity"
                type="text"
                placeholder="quntity"
                className="productUpdateAddInputs"
              ></input>
            </div>
            <div className="productUpdateAddItem">
              <label>Price</label>
              <input
                id="price"
                type="text"
                placeholder="price"
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
              onClick={() => (alert("Product updated Successfully!")
              )}
            >
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
