import React, { useEffect, useState } from "react";
import PhotoList from "../components/PhotoList";
import { fetchData } from "../helpers/api";
import "../styles/HomeRoute.scss";

const HomeRoute = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPhotos = async () => {
      try {
        const data = await fetchData("http://localhost:8001/api/photos");
        setPhotos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadPhotos();
  }, []);

  if (loading) return <p>Loading photos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="home-route">
      <h1>PhotoLabs</h1>
      <PhotoList photos={photos} />
    </div>
  );
};

export default HomeRoute;