export const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch data from ${url}`);
      }
      return await response.json();
    } catch (error) {
      console.error("API Error:", error.message);
      throw error;
    }
  };

// Fetch data from the API and handle errors
const loadPhotos = async () => {
  try {
    const data = await fetchData("http://localhost:8001/api/photos");
    setPhotos(data); // Update state with fetched photos
  } catch (err) {
    setError(err.message); // Handle errors
  } finally {
    setLoading(false); // Stop loading spinner
  }
};