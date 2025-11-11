import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo"><img src="../src/assets/logo.png" alt="" /></div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>Home</li>
        <li>About</li>
        <li>All Courses</li>
        <li>Faculty</li>
        <li>Event</li>
        <li>Contact</li>
      </ul>

      <div className="header-right">
        <FaFacebookF />
        <FaInstagram />
        <FaTwitter />
        <FaYoutube />
      </div>

      {/* Hamburger Icon */}
      <div
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </div>
    </nav>
  );
}

export default Navbar;
