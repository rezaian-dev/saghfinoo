import React from 'react'
import Header from '../../../layouts/Header/Header'
import ProfileManagement from '../../../components/ProfileManagement/ProfileManagement'
import Footer from '../../../layouts/Footer/Footer'
import UserAds from '../../../components/UserAds/UserAds'

export default function MyAd() {
  return (
    <>
          {/* 🏠 Page Header */}
          <header className="user-profile__header">
            <div className="container">
              <Header />
            </div>
          </header>
    
          {/* 📌 This is the main section of the user profile page, containing the sidebar for profile management and the user profile edit section. */}
          <main className="user-profile__main">
            <div className="container">
              <div className="user-profile__grid">
                <div className="user-profile__sidebar">
                  <ProfileManagement activeLabel={"myAds"} />
                </div>
                <div className="user-profile__content">
                <UserAds text={"آگهی های من"} title={"هنوز آگهی‌ای ثبت نکردید!"} image={"images/myAd/pana.png"} description={"با ثبت رایگان آگهی هر جا که هستید به‌سرعت ملک‌تان را معامله کنید"} myad={true}/>
                </div>
              </div>
            </div>
          </main>
    
          <footer className="user-profile__footer">
            <div className="container">
              <Footer />
            </div>
            {/* Copyright text displayed at the bottom of the footer (visible only on medium and larger screens) */}
            <p className="user-profile__footer-copyright">
              حقوق این سایت متعلق به سقفینو است
            </p>
          </footer>
        </>
  )
}
