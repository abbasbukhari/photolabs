import React from "react";

const Navbar = ({ toggleDarkMode, darkMode, setSelectedCategory }) => {
  return (
    <nav className="navbar">
      <h1 className="navbar__title">PhotoLabs</h1>
      <ul className="navbar__links">
        <li onClick={() => setSelectedCategory("Nature")}>Nature</li>
        <li onClick={() => setSelectedCategory("Travel")}>Travel</li>
        <li onClick={() => setSelectedCategory("Animals")}>Animals</li>
        <li onClick={() => setSelectedCategory("All")}>All</li> {/* Option to show all photos */}
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