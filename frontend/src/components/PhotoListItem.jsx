import React from "react";

const PhotoListItem = ({ photo }) => {
  const { urls = {}, location = {}, user = {} } = photo;

  return (
    <div className="photo-list__item">
      <img
        className="photo-list__image"
        src={urls.regular || "https://via.placeholder.com/150"}
        alt={location.city || "Unknown"}
      />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={user.profile || "https://via.placeholder.com/50"}
          alt={user.name || "Unknown User"}
        />
        <div className="photo-list__user-info">
          <div>{user.name || "Unknown User"}</div>
          <div className="photo-list__user-location">
            {location.city || "Unknown City"}, {location.country || "Unknown Country"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
