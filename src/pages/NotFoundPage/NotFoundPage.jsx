import React from "react";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import NotFoundView from "../../components/MiscellaneousComponents/NotFoundView/NotFoundView";

export default function NotFoundPage() {
  return (
    <>
      {/* 🏡 Page Header with Navigation */}
      <header className="md:pt-10">
        <div className="container">
          <Header />
        </div>
      </header>

      {/* ❗ 404 Error Content Section */}
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

      {/* 🏻 Page Footer with Copyright */}
      <footer className="not-found-page__footer">
        <div className="container">
          <Footer />
        </div>
        
        {/* © Copyright Notice (Persian) */}
        <p className="footer-copyright-shared footer-copyright-shared">
          حقوق این سایت متعلق به سقفینو است
        </p>
      </footer>
    </>
  );
}
