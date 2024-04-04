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
        <li onClick={() => setMenu("laptops")}>
          <Link style={{ textDecoration: 'none'}} to="/laptops">Laptops</Link>{" "}
          {menu === "laptops" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("cameras")}>
          <Link style={{ textDecoration: 'none'}} to="/cameras">Cameras</Link>{" "}
          {menu === "cameras" ? <hr /> : <></>}
        </li>
      
          <li onClick={() => setMenu("accesories")}>
          <Link style={{ textDecoration: 'none'}} to="/accesories">Accesories</Link> {menu === "accesories" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
        
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;