import React from "react";
import Header from "../../../layouts/Header/Header";
import Footer from "../../../layouts/Footer/Footer";
import ProfileManagement from "../../../components/UserComponents/Profile/ProfileManagement/ProfileManagement";
import UserProfileEdit from "../../../components/UserComponents/Profile/UserProfileEdit/UserProfileEdit";

export default function UserProfilePage() {
  return (
    <>
      {/* 🏠 Page Header */}
      <header className="md:pt-10">
        <div className="container">
          <Header />
        </div>
      </header>

      {/* 📌 This is the main section of the user profile page, containing the sidebar for profile management and the user profile edit section. */}
      <main className="user-profile__main">
        <div className="container">
          <div className="user-profile__grid">
            <div className="user-profile__sidebar">
              <ProfileManagement activeLabel={"editInfo"} />
            </div>
            <div className="user-profile__content">
              <UserProfileEdit />
            </div>
          </div>
        </div>
      </main>

      <footer className="user-profile__footer">
        <div className="container">
          <Footer />
        </div>
        {/* Copyright text displayed at the bottom of the footer (visible only on medium and larger screens) */}
        <p className="footer-copyright-shared">
          حقوق این سایت متعلق به سقفینو است
        </p>
      </footer>
    </>
  );
}
