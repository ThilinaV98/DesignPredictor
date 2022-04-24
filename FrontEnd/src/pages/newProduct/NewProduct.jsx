import "./newProduct.css";
import axios from 'axios';

function handleSubmit(e) {
  e.preventDefault();
  const { id, quntity, price, img} = e.target.elements;
  console.log({ id: id.value, quntity: quntity.value, price: price.value, img: img.value});
  axios.post('http://localhost:5000/users', {
    "id": id.value, 
    "quntity": quntity.value, 
    "price": price.value, 
    "img": img.value
  })
}

export default function newProduct() {
  return (
    <div className="newProduct">
      <div className="newProductTitleContainer">Update User</div>
      <div className="newProductAdd">
        <span className="newProductAddTitle">Edit Details</span>
        <form className="newProductAddForm" onSubmit={handleSubmit} action="POST">
          <div className="newProductAddLeft">
            <div className="newProductAddItem">
              <label>ID</label>
              <input
                id="id"
                type="text"
                placeholder="id"
                className="newProductAddInputs"
              ></input>
            </div>
            <div className="newProductAddItem">
              <label>Quntity</label>
              <input
                id="quntity"
                type="text"
                placeholder="quntity"
                className="newProductAddInputs"
              ></input>
            </div>
            <div className="newProductAddItem">
              <label>Price</label>
              <input
                id="price"
                type="text"
                placeholder="price"
                className="newProductAddInputs"
              ></input>
            </div>
            <div className="newProductAddItem">
              <label>Image</label>
              <input
                id="img"
                type="file"
                className="newProductAddInputs"
              ></input>
            </div>
          </div>
          <div className="newProductAddRight">
            <div className="newProductAddItem"></div>
            <button className="newProductAddButton">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  );
}
