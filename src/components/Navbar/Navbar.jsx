import React from "react";
import "./Navbar.style.css";

export default function Navbar() {
  return (
    <div className="nav-bar-container">
      <div className="branding">MCES</div>
      <div className="nav-links">
        <a href="/" className="nav-link">
          Home
        </a>
        <a href="/" className="nav-link">
          About
        </a>
      </div>
    </div>
  );
}
