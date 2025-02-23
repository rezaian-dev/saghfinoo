import React from "react";
import Header from "../../layouts/Header/Header";

export default function Realestate() {
  // 🔹 Social media links data
  const dataSocialMedia = [
    { id: 1, link: "t.me/amlaktoosi", image: "images/socialMedia/telegram.png" },
    { id: 2, link: "Toosi_Amlak", image: "images/socialMedia/linkdin.png" },
    { id: 3, link: "Toosi_Amlak", image: "images/socialMedia/instagram.png" },
    { id: 4, link: "Toosi_Amlak.com", image: "images/socialMedia/site.png" },
  ];

  return (
    <>
      {/* 📌 Header Section */}
      <header className="realestate__header">
        <div className="container">
          <Header />
        </div>

        {/* 📌 Social Media Box (Visible only on medium and larger screens) */}
        <div className="realestate__social-box">
          {dataSocialMedia.map(({ id, link, image }) => (
            <span key={id} className="realestate__social-item">
              <a className="realestate__social-link" href="#">
                {link}
                <img className="realestate__social-icon" src={image} loading="lazy" alt="icon" />
              </a>
            </span>
          ))}
        </div>

        {/* 📌 Floating Logo Circle */}
        <div className="realestate__logo-circle">
          <img className="realestate__logo" src="images/realestate/Vector.png" loading="lazy" alt="logo" />
        </div>
      </header>
    </>
  );
}

