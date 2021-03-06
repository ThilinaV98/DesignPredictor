import "./user.css";
import axios from 'axios';

function handleSubmit(e) {
  e.preventDefault();
  const { id, username, password, email, department, position} = e.target.elements;
  // console.log({ username: username.value, password: password.value, email: email.value, department: department.value, position: position.value });
  axios.post('http://localhost:5000/users', {
    
    "id" :id.value,
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
      <div className="userTitleContainer">Add User</div>
      <div className="userAdd">
        <span className="userAddTitle">Edit Details</span>
        <form className="userAddForm" onSubmit={handleSubmit} action="POST">
          <div className="userAddLeft">
            <div className="userAddItem">
              <label>Id</label>
              <input
                id="id"
                type="text"
                placeholder="id"
                className="userAddInputs"
              ></input>
            </div>
            <div className="userAddItem">
              <label>Username</label>
              <input
                id="username"
                type="text"
                placeholder="username"
                className="userAddInputs"
              ></input>
            </div>
            <div className="userAddItem">
              <label>Password</label>
              <input
                id="password"
                type="password"
                placeholder="password"
                className="userAddInputs"
              ></input>
            </div>
            <div className="userAddItem">
              <label>Email</label>
              <input
                id="email"
                type="text"
                placeholder="email"
                className="userAddInputs"
              ></input>
            </div>
            <div className="userAddItem">
              <label>Department</label>
              <input
                id="department"
                type="text"
                placeholder="department"
                className="userAddInputs"
              ></input>
            </div>
            <div className="userAddItem">
              <label>Position</label>
              <input
                id="position"
                type="text"
                placeholder="position"
                className="userAddInputs"
              ></input>
            </div>
          </div>
          <div className="userAddRight">
            <div className="userAddItem"></div>
            <button type="submit" className="userAddButton" onClick={() => (alert("User added successfully !")
              )}>Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
}
