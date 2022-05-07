import Sidebar from "./components/sidebar/Sidebar";
// import React, { useEffect, useState } from "react";
import Topbar from "./components/topbar/Topbar";
import UserList from "./pages/userList/UserList";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./pages/user/User";
import ProductList from "./pages/productList/ProductList";
import UploadImage from "./pages/uploadlimage/UploadImage";
import NewProduct from "./pages/newProduct/NewProduct";
import UserUpdate from "./pages/userUpdate/UserUpdate";
import ProductUpdate from "./pages/productUpdate/ProductUpdate";
import Login from "./pages/login/Login";
import "./app.css";
// ###############################################################

// ###############################################################
import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";

import "./style.css";

function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  let [database, setDatabase] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((result) => {
        setDatabase(result);
      });
  }, []);

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        
        setErrorMessages({ name: "pass", message: errors.pass });
        alert("Invalid Username or Password!")
      } else {
        setIsSubmitted(true);
        alert("User login successfully !")
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  // const renderForm = (
  //   <div className="form">
  //     <div className="title">Login</div>
  //     <form onSubmit={handleSubmit}>
  //       <div className="input-container">
  //         <label>Username </label>
  //         <input type="text" name="uname" required />
  //         {renderErrorMessage("uname")}
  //       </div>
  //       <div className="input-container">
  //         <label>Password </label>
  //         <input type="password" name="pass" required />
  //         {renderErrorMessage("pass")}
  //       </div>
  //       <div className="button-container">
  //         {/* <input type="submit" /> */}
  //         <button type="submit" onClick={() => (alert("User login successfully !")
  //             )}>Login</button>
  //       </div>
  //     </form>
  //   </div>
  // );

  return (
    // <div className="app">
    <div>
      {isSubmitted ? (
        <div>
          <Router>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/users" element={<UserList />}></Route>
                <Route path="/user" element={<User />}></Route>
                <Route path="/products" element={<ProductList />}></Route>
                <Route path="/report" element={<UploadImage />}></Route>
                <Route path="/newProduct" element={<NewProduct />}></Route>
                <Route path="/userUpdate" element={<UserUpdate />}></Route>
                <Route
                  path="/products/:productId"
                  element={<ProductUpdate />}
                ></Route>
              </Routes>
            </div>
          </Router>
        </div>
      ) : (
        <div className="login-form">
          <div className="form">
            <div className="title">Login</div>
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <label>Username </label>
                <input type="text" name="uname" required />
                {renderErrorMessage("uname")}
              </div>
              <div className="input-container">
                <label>Password </label>
                <input type="password" name="pass" required />
                {renderErrorMessage("pass")}
              </div>
              <div className="button-container">
                {/* <input type="submit" /> */}
                <button
                  type="submit"
                  
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* </div> */}
    </div>
  );
}

export default App;

// ###############################################################

// ###############################################################
// function App() {
//   // let user = true;
//   return (
//     <Router>
//        {/* {user ?  <Topbar />: <Navigate  to="/"/>} */}
//       <Topbar />
//       <div className="container">
//       {/* {user ?  <Sidebar />: <Navigate  to="/"/>} */}
//         {/* <Sidebar /> */}
//               <Sidebar />
//         <Routes>
//           <Route exact path="/" element={<Login />}></Route>

//           <Route exact path="/home" element={<Home />}></Route>
//           <Route path="/users" element={<UserList />}></Route>
//           <Route path="/user" element={<User />}></Route>
//           <Route path="/products" element={<ProductList />}></Route>
//           <Route path="/report" element={<UploadImage />}></Route>
//           <Route path="/newProduct" element={<NewProduct />}></Route>
//           <Route path="/userUpdate" element={<UserUpdate />}></Route>
//           <Route path="/productUpdate" element={<ProductUpdate />}></Route>

//         </Routes>
//       </div>
//     </Router>
//   );
// }
// export default App;
