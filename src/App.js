import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Home from "./components/Home";
import Equipment from "./components/Equipment";
import Account from "./components/Account";
import Register from "./components/Register";
import Login from "./components/Login";
import Gear from "./components/Gear";
import Background from "../src/images/background.jpg";

const App = () => {
  return (
    <div style={{ backgroundImage: `url(${Background})`, height: "100vh", backgroundSize: "cover" }}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="equipment/water-gear" element={<Gear />} />
          <Route path="equipment/snow-gear" element={<Gear />} />
          <Route path="equipment/camping-gear" element={<Gear />} />
          <Route path="equipment/climbing-gear" element={<Gear />} />
          <Route path="/account" element={<Account />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
