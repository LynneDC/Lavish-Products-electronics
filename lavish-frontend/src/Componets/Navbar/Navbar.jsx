import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/tech.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";



const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" style={{ width: "100px", height: "auto" }} />
        <p>LavishTECH</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link style={{ textDecoration: 'none'}} to="/">Shop</Link> {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("laptops")}>
          <Link style={{ textDecoration: 'none'}} to="/laptops">Laptops</Link>{" "}
          {menu === "laptops" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("cameras")}>
          <Link style={{ textDecoration: 'none'}} to="/cameras">Cameras</Link>{" "}
          {menu === "cameras" ? <hr /> : <></>}
        </li>
        {/* adding about and contact */}
        <li onClick={() => setMenu("cameras")}>
          <Link style={{ textDecoration: 'none'}} to="/about">About</Link>{" "}
          {menu === "about" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("contact")}>
          <Link style={{ textDecoration: 'none'}} to="/contact">Contact</Link>{" "}
          {menu === "contact" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("cart")}>
          <Link style={{ textDecoration: 'none'}} to="/cart">Cart</Link> {menu === "cart" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;