import "./login.css";
import axios from 'axios';
import {useNavigate } from "react-router-dom"

function handleSubmit(e) {
  e.preventDefault();
  const { username, password, email, department, position} = e.target.elements;
  // console.log({ username: username.value, password: password.value, email: email.value, department: department.value, position: position.value });
  // axios.post('http://localhost:5000/users', {
  //   "username": username.value,
  //   "password": password.value,
  //   "email": email.value,
  //   "department": department.value,
  //   "position": position.value

  // })
}

function Login() {

  let navigate = useNavigate ();
  // navigate('/home');
  return (
    <div className="login">
      <div className="loginTitleContainer">Login User</div>
      <div className="loginUser">
        <span className="loginUserTitle">Edit Details</span>
        <form className="loginUserForm" onSubmit={handleSubmit} action="POST">
          <div className="loginUserLeft">
          <div className="loginUserItem">
              <label>Email</label>
              <input
                id="email"
                type="text"
                placeholder="email"
                className="loginUserInputs"
              ></input>
            </div>
            <div className="loginUserItem">
              <label>Password</label>
              <input
                id="password"
                type="password"
                placeholder="password"
                className="loginUserInputs"
              ></input>
            </div>
          </div>
          <div className="loginUserRight">
            <div className="loginUserItem"></div>
            <button type="submit" className="loginUserButton" onClick={() => {
              navigate("/home");
            }}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
