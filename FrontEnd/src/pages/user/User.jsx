import "./user.css";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">Update User</div>
      <div className="userUpdate">
        <span className="userUpdateTitle">Edit Details</span>
        <form className="userUpdateForm">
          <div className="userUpdateLeft">
            <div className="userUpdateItem">
              <label>Username</label>
              <input
                type="text"
                placeholder="username"
                className="userUpdateInputs"
              ></input>
            </div>
            <div className="userUpdateItem">
              <label>Email</label>
              <input
                type="text"
                placeholder="email"
                className="userUpdateInputs"
              ></input>
            </div>
            <div className="userUpdateItem">
              <label>Department</label>
              <input
                type="text"
                placeholder="department"
                className="userUpdateInputs"
              ></input>
            </div>
            <div className="userUpdateItem">
              <label>Position</label>
              <input
                type="text"
                placeholder="position"
                className="userUpdateInputs"
              ></input>
            </div>
          </div>
          <div className="userUpdateRight">
              <div className="userUpdateItem">
              </div>
                  <button className="userUpdateButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
