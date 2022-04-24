import "./user.css";
import axios from 'axios';

function handleSubmit(e) {
  e.preventDefault();
  const { username, password, email, department, position} = e.target.elements;
  console.log({ username: username.value, password: password.value, email: email.value, department: department.value, position: position.value });
  axios.post('http://localhost:5000/users', {
    "username": username.value,
    "password": password.value,
    "email": email.value,
    "department": department.value,
    "position": position.value

  })
}

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">Update User</div>
      <div className="userUpdate">
        <span className="userUpdateTitle">Edit Details</span>
        <form className="userUpdateForm" onSubmit={handleSubmit} action="POST">
          <div className="userUpdateLeft">
            <div className="userUpdateItem">
              <label>Username</label>
              <input
                id="username"
                type="text"
                placeholder="username"
                className="userUpdateInputs"
              ></input>
            </div>
            <div className="userUpdateItem">
              <label>Password</label>
              <input
                id="password"
                type="password"
                placeholder="password"
                className="userUpdateInputs"
              ></input>
            </div>
            <div className="userUpdateItem">
              <label>Email</label>
              <input
                id="email"
                type="text"
                placeholder="email"
                className="userUpdateInputs"
              ></input>
            </div>
            <div className="userUpdateItem">
              <label>Department</label>
              <input
                id="department"
                type="text"
                placeholder="department"
                className="userUpdateInputs"
              ></input>
            </div>
            <div className="userUpdateItem">
              <label>Position</label>
              <input
                id="position"
                type="text"
                placeholder="position"
                className="userUpdateInputs"
              ></input>
            </div>
          </div>
          <div className="userUpdateRight">
            <div className="userUpdateItem"></div>
            <button type="submit" className="userUpdateButton">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
}
