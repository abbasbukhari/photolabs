import React from "react";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  return (
    <nav className="navbar">
      <h1 className="navbar__title">PhotoLabs</h1>
      <ul className="navbar__links">
        <li>People</li>
        <li>Nature</li>
        <li>Travel</li>
        <li>Animals</li>
        <li>Fashion</li>
      </ul>
      <div className="navbar__actions">
        <button className="navbar__icon">❤️</button>
        <button className="navbar__icon" onClick={toggleDarkMode}>
          {darkMode ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;