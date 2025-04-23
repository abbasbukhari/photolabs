import React from "react";

const PhotoList = ({ photos }) => {
  return (
    <div className="photo-list">
      {photos.map((photo) => (
        <div className="photo-list__item" key={photo.id}>
          <div className="photo-list__image-container">
            <img
              className="photo-list__image"
              src={photo.urls.regular}
              alt={photo.location.city}
            />
            <button className="photo-list__like-button">❤️</button>
          </div>
          <div className="photo-list__user-details">
            <img
              className="photo-list__user-profile"
              src={photo.user.profile}
              alt={photo.user.name}
            />
            <div className="photo-list__user-info">
              <div className="photo-list__user-name">{photo.user.name}</div>
              <div className="photo-list__user-location">
                {photo.location.city}, {photo.location.country}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoList;
