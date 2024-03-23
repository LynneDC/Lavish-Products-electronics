import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/tech.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import chevron from "../Assets/chevron.png";
import { useRef } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const menuRef = useRef();
  const chevron_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");

  }

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" style={{ width: "100px", height: "auto" }} />
        <p>LavishTECH</p>
      </div>
      <img className= 'chevron'onClick={chevron_toggle} src={chevron} alt='' style={{ width: "40px", height: "40px" }}/>
      <ul ref={menuRef}className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link style={{ textDecoration: 'none'}} to="/">Shop</Link> {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link style={{ textDecoration: 'none'}} to="/mens">Men</Link>{" "}
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link style={{ textDecoration: 'none'}} to="/womens">Women</Link>{" "}
          {menu === "womens" ? <hr /> : <></>}
        </li>
          <li onClick={() => setMenu("kids")}>
          <Link style={{ textDecoration: 'none'}} to="/kids">Kid</Link> {menu === "kid" ? <hr /> : <></>}
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