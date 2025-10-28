import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/API_HUB LOGO.png";

export default function Header() {
  const location = useLocation();

  return (
    <header className="navbar">
      <Link to="/" className="logo">
        <div className="logo-icon">
          <img src={logo} alt="API Hub logo" className="logo-img" />
        </div>
        API Hub
      </Link>
      <ul className="nav-links">
        <li>
          <Link 
            to="/products" 
            className={location.pathname === "/products" ? "active" : ""}
          >
            <span className="nav-number">01</span> Products
          </Link>
        </li>
        <li>
          <Link 
            to="/documentation" 
            className={location.pathname === "/documentation" ? "active" : ""}
          >
            <span className="nav-number">02</span> Documentation
          </Link>
        </li>
        <li>
          <Link 
            to="/enterprise" 
            className={location.pathname === "/enterprise" ? "active" : ""}
          >
            <span className="nav-number">03</span> Enterprise
          </Link>
        </li>
        <li>
          <Link 
            to="/community" 
            className={location.pathname === "/community" ? "active" : ""}
          >
            <span className="nav-number">04</span> Community
          </Link>
        </li>
      </ul>
      <div className="nav-actions">
        <Link to="/signin" className="nav-btn login">Sign In</Link>
        <Link to="/signup" className="nav-btn signup">Get Started</Link>
      </div>
    </header>
  );
}