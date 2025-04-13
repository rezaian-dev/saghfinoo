import React, { memo } from "react";

const MarketRecovery = memo(() => {
  return (
    <article>
      {/* 📉 Title of Market Recovery */}
      <h3 className="title-style">خروج بازار مسکن از رکود</h3>

      {/* 📊 First Paragraph - Expert's Opinion on Market Recovery */}
      <p className="title-style">
        یک کارشناس مسکن همچنین در مورد خروج بازار از رکود توضیح داد: « اگر بازار
        مسکن قصد احیای خود را داشته باشد، شرط آن فعال بودن سایر بازارهای موازی
        است. پس از اینکه این بازارها رشد کردند، مسکن نیز از رکود خارج می‌شود.»
      </p>

      {/* 🧐 Second Paragraph - Analysis of Market Conditions */}
      <p className="title-style">
        وی همچنین بیان کرد: «نکته‌ای که اکنون می‌توان به آن اشاره کرد این است که
        مسکن به نوعی رکود و نظام قهری از سوی سرمایه‌گذاران و مصرف‌کنندگان رسیده
        است. مطالعات میدانی نشان می‌دهد حتی اگر فروشنده بخواهد قیمت را به‌صورت
        دلخواه کاهش دهد، باز هم مخاطبی وجود ندارد تا با آن قیمت تحریک شود.»
      </p>

      {/* 📸 Image Section */}
      <div className="market-recovery__image-wrapper">
        <img
          className="image-full"
          src="../images/news/housing-news-14.webp"
          loading="lazy"
          alt="housing-news-14"
        />
      </div>
    </article>
  );
});

export default MarketRecovery;
