import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SuccessMessageAd from "../../../components/CoreComponents/Messages/SuccessMessageAd/SuccessMessageAd";
import ErrorMessageAd from "../../../components/CoreComponents/Messages/ErrorMessageAd/ErrorMessageAd";

export default function AdSuccess() {
  const navigate = useNavigate();

  // Pre-set state for success/error messages 🌟
  const [success, setSuccess] = useState(true); // Set to true for success ✅
  const [error, setError] = useState(null); // Set to null or error message if needed ❌

  // Simulate backend request 🖥️
  const mockBackendRequest = () => {
    return new Promise((resolve, reject) => {
      // Here, we can pre-set either success or error
      const isSuccess = true; // Change this to false for error simulation 🎲
      setTimeout(() => {
        if (isSuccess) {
          resolve({ message: "Your ad was successfully submitted!" }); // Success ✅
        } else {
          reject({ message: "There was an issue with submitting your ad." }); // Error ⚠️
        }
      }, 1000); // Simulated delay ⏳
    });
  };

  useEffect(() => {
    // Simulate the request immediately when the component mounts 🚀
    mockBackendRequest()
      .then(() => {
        setSuccess(true); // Set success state 👍
      })
      .catch((err) => {
        setError(err.message); // Set error message if failed 😞
        setSuccess(false); // Set success to false ❌
      });
  }, []); // Empty dependency array means only run on mount 🧩

  return (
    <div className="ad-form">
      <div className="container">
        <div className="ad-form__grid">
          {/* 📌 Banner image */}
          <div className="ad-form__image-container">
            <img
              className="image-full"
              src="../images/register/register-banner.webp"
              loading="lazy"
              alt="Register Banner"
            />
          </div>

          {/* 📝 Form display */}
          <div className="form-container form-container--centered">
            {/* Show success or error message based on status */}
            {success ? <SuccessMessageAd /> : <ErrorMessageAd />}
          </div>
        </div>
      </div>
    </div>
  );
}
