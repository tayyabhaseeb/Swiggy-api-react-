import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useOnline from "../hooks/useOnline";
import { useSelector } from "react-redux";

function Header() {
  const [isLogin, setIsLogin] = useState("false");
  const items = useSelector((store) => store.items.items);

  const isOnline = useOnline();

  return (
    <div className="header-container">
      <NavLink to="/">
        <img
          alt="logo"
          src="https://images.deliveryhero.io/image/talabat/restaurants/Logo638391006186783627.jpg?width=300"
          className="header-logo"
        />
      </NavLink>

      <div className="header-logo-container">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/cart">Cart-{items.length}</NavLink>
        <NavLink to="/instamart">Instamart</NavLink>
      </div>

      <button>{isOnline ? "ONLINE" : "OFFLINE"}</button>
      <button
        className="header-auth"
        onClick={() => setIsLogin((prev) => !prev)}
      >
        {isLogin ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default Header;
