import React, { useState } from "react";
import Navbar from "./components/Navbar";
import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Dynamically generate photo data for images in the public folder
  const photos = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    url: `/Image-${index + 1}-Regular.jpeg`, // Corrected path for images
    user: {
      name: "John Doe", // Single profile name
      profile: `/profile-1.jpg`, // Single profile picture
    },
    location: {
      city: index % 2 === 0 ? "Toronto" : "Vancouver",
      country: "Canada",
    },
  }));

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div className="photo-list">
        {photos.map((photo) => (
          <PhotoListItem key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default App;
