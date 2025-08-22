import { useState } from "react";
import "./navbar.css";
import { FaShoppingCart, FaUser } from "react-icons/fa"; 
import { FaLeaf } from "react-icons/fa"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-icon"><FaLeaf /></span>
        <span className="logo-text">FarmFresh</span>
      </div>

      <ul className="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Fresh Produce</a></li>
        <li><a href="#">Organic</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className="right-section">
        <FaShoppingCart className="cart-icon" />

        <button className="login-btn">
          <FaUser className="btn-icon" /> Login
        </button>

        <button className="signup-btn">
          Sign Up
        </button>
      </div>

      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {isOpen && (
        <div className="mobile-menu">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Fresh Produce</a>
          <a href="#">Organic</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <div className="mobile-auth">
            <button className="login-btn"><FaUser className="btn-icon" /> Login</button>
            <button className="signup-btn">Sign Up</button>
          </div>
        </div>
      )}
    </nav>
  );
}
