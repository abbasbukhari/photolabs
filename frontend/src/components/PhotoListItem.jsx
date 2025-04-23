import React from "react";

const PhotoListItem = ({ photo }) => {
  const { url, user, location } = photo;

  return (
    <div className="photo-list__item">
      <div className="photo-list__image-container">
        <img
          className="photo-list__image"
          src={url}
          alt={`${location.city}, ${location.country}`}
        />
        <button className="photo-list__like-button">❤️</button>
      </div>
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={user.profile}
          alt={user.name}
        />
        <div className="photo-list__user-info">
          <div className="photo-list__user-name">{user.name}</div>
          <div className="photo-list__user-location">
            {location.city}, {location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
