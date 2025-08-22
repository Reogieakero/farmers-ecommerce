import React from "react";
import "./footer.css";
import { FaLeaf, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <FaLeaf className="leaf" />
          <span className="brand-name">FarmFresh</span>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="#">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer-meta">
          <div className="socials" aria-hidden="false">
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
          </div>
          <small>© {new Date().getFullYear()} FarmFresh. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}