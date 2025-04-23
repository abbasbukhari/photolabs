import React, { useEffect, useState } from "react";
import "./App.scss";
import PhotoListItem from "./components/PhotoListItem";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/photos")
      .then((response) => response.json())
      .then((data) => setPhotos(data))
      .catch((error) => console.error("Error fetching photos:", error));
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
      <header>
        <h1>PhotoLabs</h1>
        <button onClick={toggleDarkMode}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </header>
      <div className="photo-list">
        {photos.map((photo, index) => (
          <PhotoListItem key={index} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default App;
