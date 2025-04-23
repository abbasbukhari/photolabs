import React, { useState } from "react";
import Navbar from "./components/Navbar";
import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Dynamically generate photo data for images in the public folder
  const photos = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    url: `/Image-${index + 1}-Regular.jpeg`,
    user: {
      name: "John Doe",
      profile: `/profile-1.jpg`,
    },
    location: {
      city: index % 2 === 0 ? "Toronto" : "Vancouver",
      country: "Canada",
    },
    category: index % 3 === 0 ? "Nature" : index % 3 === 1 ? "Travel" : "Animals", // Assign categories
  }));

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Filter photos based on the selected category
  const filteredPhotos =
    selectedCategory === "All"
      ? photos
      : photos.filter((photo) => photo.category === selectedCategory);

  return (
    <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Navbar
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        setSelectedCategory={setSelectedCategory} // Pass the category setter
      />
      <div className="photo-list">
        {filteredPhotos.map((photo) => (
          <PhotoListItem key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default App;
