// import Sidebar from "./components/sidebar/Sidebar";
// import Topbar from "./components/topbar/Topbar";
// import UserList from "./pages/userList/UserList";
// import Home from "./pages/home/Home";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import User from "./pages/user/User";
// import ProductList from "./pages/productList/ProductList";
// import UploadImage from "./pages/uploadlimage/UploadImage";
// import NewProduct from "./pages/newProduct/NewProduct";
// import UserUpdate from "./pages/userUpdate/UserUpdate";
// import Login from "./pages/login/Login";
// import React, { useState } from "react";
// import ReactDOM from "react-dom";

// import "./style.css";

// function App() {
//   // React States
//   const [errorMessages, setErrorMessages] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   // User Login info
//   const database = [
//     {
//       username: "user1",
//       password: "pass1"
//     },
//     {
//       username: "user2",
//       password: "pass2"
//     }
//   ];

//   const errors = {
//     uname: "invalid username",
//     pass: "invalid password"
//   };

//   const handleSubmit = (event) => {
//     //Prevent page reload
//     event.preventDefault();

//     var { uname, pass } = document.forms[0];

//     // Find user login info
//     const userData = database.find((user) => user.username === uname.value);

//     // Compare user info
//     if (userData) {
//       if (userData.password !== pass.value) {
//         // Invalid password
//         setErrorMessages({ name: "pass", message: errors.pass });
//       } else {
//         setIsSubmitted(true);
//       }
//     } else {
//       // Username not found
//       setErrorMessages({ name: "uname", message: errors.uname });
//     }
//   };

//   // Generate JSX code for error message
//   const renderErrorMessage = (name) =>
//     name === errorMessages.name && (
//       <div className="error">{errorMessages.message}</div>
//     );

//   // JSX code for login form
//   const renderForm = (
//     <div className="form">
//       <form onSubmit={handleSubmit}>
//         <div className="input-container">
//           <label>Username </label>
//           <input type="text" name="uname" required />
//           {renderErrorMessage("uname")}
//         </div>
//         <div className="input-container">
//           <label>Password </label>
//           <input type="password" name="pass" required />
//           {renderErrorMessage("pass")}
//         </div>
//         <div className="button-container">
//           <input type="submit" />
//         </div>
//       </form>
//     </div>
//   );

//   return (
//     <div className="app">
//       <div className="login-form">
//         <div className="title">Sign In</div>
//         {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
//       </div>
//     </div>
//   );
// }

// export default App;