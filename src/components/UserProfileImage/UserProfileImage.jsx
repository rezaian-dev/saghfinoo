import React from "react";
import { ProfileCircle, GalleryAdd } from "iconsax-react";

/**
 * 🖼️ UserProfileImage Component
 * Displays user profile image with upload functionality
 **/
const UserProfileImage = ({ userImage, handleFileChange }) => {
  return (
    <div className="user-profile-edit__image-container">
      {/* 📸 Image upload control */}
      <label className="user-profile-edit__image-label">
        {/* 📁 Hidden file input */}
        <input
          className="user-profile-edit__image-input"
          type="file"
          accept="image/png,image/jpg"
          onChange={handleFileChange}
        />
        
        {/* 🔄 Conditional rendering based on image existence */}
        {userImage ? (
          // 📷 User uploaded image
          <img
            className="user-profile-edit__image"
            src={userImage}
            loading="lazy"
            alt="userImage"
          />
        ) : (
          // 👤 Default profile placeholder
          <div className="user-profile-edit__image-placeholder">
            <ProfileCircle size="68" color="#717171" />
            <div className="user-profile-edit__image-add-icon">
              <GalleryAdd size="20" color="#ADADAD" />
            </div>
          </div>
        )}
      </label>
    </div>
  );
};

export default UserProfileImage;