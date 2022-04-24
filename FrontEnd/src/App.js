import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import UserList from "./pages/userList/UserList";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./pages/user/User";
import ProductList from "./pages/productList/ProductList";
import ImageUpload from "./pages/uploadlimage/UploadImage";
import NewProduct from "./pages/newProduct/NewProduct"

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/users" element={<UserList />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/products" element={<ProductList/>}></Route>
          <Route path="/report" element={<ImageUpload/>}></Route>
          <Route path="/newProduct" element={<NewProduct/>}></Route>

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
