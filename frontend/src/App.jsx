import PhotoListItem from './components/PhotoListItem';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = ({ photos = [] }) => {
  return (
    <div className="App">
      <h1>PhotoLabs</h1>
      {photos.map((photo, index) => (
        <PhotoListItem key={index} photo={photo} />
      ))}
    </div>
  );
};

export default App;
