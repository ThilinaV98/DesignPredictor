import "./newProduct.css";

export default function newProduct() {
  return (
    <div className="newProduct">
      <div className="unewProductTitleContainer">Update User</div>
      <div className="newProductAdd">
        <span className="newProductAddTitle">Edit Details</span>
        <form className="newProductAddForm">
          <div className="newProductAddLeft">
            <div className="newProductAddItem">
              <label>Username</label>
              <input
                type="text"
                placeholder="username"
                className="newProductAddInputs"
              ></input>
            </div>
            <div className="newProductAddItem">
              <label>Email</label>
              <input
                type="text"
                placeholder="email"
                className="newProductAddInputs"
              ></input>
            </div>
            <div className="newProductAddItem">
              <label>Department</label>
              <input
                type="text"
                placeholder="department"
                className="unewProductAddInputs"
              ></input>
            </div>
            <div className="newProductAddItem">
              <label>Position</label>
              <input
                type="text"
                placeholder="position"
                className="newProductAddInputs"
              ></input>
            </div>
          </div>
          <div className="newProductAddRight">
              <div className="unewProductAddItem">
              </div>
                  <button className="newProductAddButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
