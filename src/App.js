import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Home from "./components/Home";
import Account from "./components/Account";
import Register from "./components/Register";
import Login from "./components/Login";
import CategoryGear from "./components/CategoryGear";
import Background from "../src/images/background.jpg";
import CategoryList from "./components/CategoryList";

const App = () => {
  
  
  return (
    <div style={{ backgroundImage: `url(${Background})`, height: "100vh", backgroundSize: "cover" }}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/categories" element={<CategoryList />} />
          <Route path="categories/water-gear" element={<CategoryGear />} />
          <Route path="categories/snow-gear" element={<CategoryGear />} />
          <Route path="categories/camping-gear" element={<CategoryGear />} />
          <Route path="categories/climbing-gear" element={<CategoryGear />} />
          <Route path="/account" element={<Account />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
