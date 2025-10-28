import React from "react";
import "../styles/Header.css";
import logo from "../assets/API_HUB LOGO.png"

export default function Header() {
  return (
    <header className="navbar">
      <div className="logo">
        <div className="logo-icon"><img src={logo} alt="API logo" className="logo" /></div>
        API Hub
      </div>
      <ul className="nav-links">
        <li><span className="nav-number">01</span> Products</li>
        <li><span className="nav-number">02</span> Documentation</li>
        <li><span className="nav-number">03</span> Enterprise</li>
        <li><span className="nav-number">04</span> Community</li>
      </ul>
      <div className="nav-actions">
        <button className="nav-btn login">Sign In</button>
        <button className="nav-btn signup">Get Started</button>
      </div>
    </header>
  );
}