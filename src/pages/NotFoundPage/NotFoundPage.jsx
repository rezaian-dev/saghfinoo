import React from "react";
import Header from "../../layouts/Header/Header";
import NotFoundView from "../../components/NotFoundView/NotFoundView";
import Footer from "../../layouts/Footer/Footer";

export default function NotFoundPage() {
  return (
    <>
      {/* 🏠 Header Section */}
      <header className="md:pt-10">
        <div className="container">
          <Header />
        </div>
      </header>

      {/* 🚫 Not Found Content */}
      <main className="not-found-page__main">
        <div className="container">
          <NotFoundView
            image={"../images/404.webp"}
            title={"صفحه‌ مورد نظر گم شده!"}
            caption={
              "املاک به‌سرعت در حال خرید و فروش و اجاره‌اند، از صفحه اصلی گزینه مورد نظر را جست‌وجو کنید."
            }
          />
        </div>
      </main>

      {/* 🔻 Footer Section */}
      <footer className="not-found-page__footer">
        <div className="container">
          <Footer />
        </div>

        {/* 📜 Copyright Notice */}
        <p className="footer-copyright-shared footer-copyright-shared">
          حقوق این سایت متعلق به سقفینو است
        </p>
      </footer>
    </>
  );
}
