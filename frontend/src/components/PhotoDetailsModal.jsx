import React from "react";

const PhotoDetailsModal = ({ photo, onClose }) => {
  if (!photo) return null;

  return (
    <div className="photo-details-modal">
      <button onClick={onClose} className="photo-details-modal__close">
        Close
      </button>
      <img src={photo.urls.regular} alt={photo.description || "Photo"} />
      <div className="photo-details-modal__info">
        <h2>{photo.user.name}</h2>
        <p>{photo.location.city}, {photo.location.country}</p>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;