import React, { useState } from "react";
import { Route, Routes, BrowserRouter as Router, useLocation } from "react-router-dom";
import "./style.css";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Mome from "./Components/Mome";
import Shale from "./Components/Shale";
import Bonnets from "./Components/Bonnets";
import Khimar from "./Components/Khimar";
import Sets from "./Components/Sets";
import Bride from "./Components/Bride";
import Event from "./Components/Event";
import Checkout from "./Components/Checkout";
import ProductDashboard from "./Components/ProductDashboard";
import SignIn from "./Components/SignUp";
import Login from "./Components/Login";
import Dashbord from "./Components/Dashbord";
import CategoryDashboard from "./Components/CategoryDashboard";
import Customers from "./Components/Customers";
import ReportsPage from './Components/ReportsPage';
import GeneralSettings from "./Components/GeneralSettings";

function App() {
  const location = useLocation();
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const excludedPaths = [
    "/dashboard",
    "/Customers",
    "/ProductDashboard",
    "/CategoryDashboard",
    "/ReportsPage",
    "/GeneralSettings",
  ];

  const shouldShowHeaderFooter = !excludedPaths.includes(location.pathname);

  return (
    <div>
      {shouldShowHeaderFooter && (
        <Header cartItems={cartItems} setCartItems={setCartItems} addToCart={addToCart} />
      )}

      <Routes>
        <Route path="/ProductDashboard" element={<ProductDashboard />} />
        <Route path="/CategoryDashboard" element={<CategoryDashboard />} />
        <Route path="/ReportsPage" element={<ReportsPage />} />
        <Route path="/GeneralSettings" element={<GeneralSettings />} />
        <Route path="/Customers" element={<Customers />} />
        <Route path="/" element={<Mome />} />
        <Route path="/dashboard" element={<Dashbord />} />
        <Route path="/hijab-shawls" element={<Shale addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cartItems} setCart={setCartItems} />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/under-hijabs-bonnets" element={<Bonnets addToCart={addToCart} />} />
        <Route path="/jilbab-khimar-prayer-dresses" element={<Khimar addToCart={addToCart} />} />
        <Route path="/sets" element={<Sets addToCart={addToCart} />} />
        <Route path="/hijab-bride" element={<Bride addToCart={addToCart} />} />
        <Route path="/evening-dress" element={<Event addToCart={addToCart} />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {shouldShowHeaderFooter && <Footer />}
    </div>
  );
}

export default App;
