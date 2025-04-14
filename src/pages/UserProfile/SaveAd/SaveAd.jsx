import React from "react";
import Header from "../../../layouts/Header/Header";
import Footer from "../../../layouts/Footer/Footer";
import ProfileManagement from "../../../components/UserComponents/Profile/ProfileManagement/ProfileManagement";
import UserAds from "../../../components/UserComponents/Auth/UserAds/UserAds";

export default function SaveAd() {
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
              <ProfileManagement activeLabel={"savedAds"} />
            </div>
            <div className="user-profile__content">
              <UserAds
                text={"آگهی های ذخیره شده"}
                savead={true}
                searchAd={true}
                image={"images/saveAd/no-save-ad.png"}
                title={"هنوز آگهی‌ای ذخیره نکردید!"}
                description={
                  "صفحه املاک اجاره‌ای سقفینو را ببینید و از میان آن‌ها آگهی‌های دلخواه را ذخیره کنید"
                }
              />
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
