import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import PhotoListItem from "./components/PhotoListItem";
import "./App.scss"; // Ensure your CSS/SCSS file is imported

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Fetch photos from the backend API
    fetch("http://localhost:3001/photos") // Ensure the backend is running on port 3001
      .then((response) => response.json())
      .then((data) => setPhotos(data))
      .catch((error) => console.error("Error fetching photos:", error));
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
      {/* Navbar Component */}
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      {/* Photo List */}
      <div className="photo-list">
        {photos.length > 0 ? (
          photos.map((photo) => (
            <PhotoListItem key={photo.id} photo={photo} />
          ))
        ) : (
          <p>Loading photos...</p>
        )}
      </div>
    </div>
  );
};

export default App;
