import React, { memo } from "react";

const MarketAnalysis = memo(() => {
  return (
    <article className="market-analysis">
      {/* 🏠 Title of Market Analysis */}
      <h3 className="title-style">رکود بازار مسکن چقدر طول میکشد؟</h3>

      {/* 📊 First Paragraph - Current Market Situation */}
      <p className="text-style">
        در حال حاضر، بازار مسکن با رکود عمیقی مواجه است و تعداد معاملات آن در
        تهران که در دوره رکودی ابتدای دهه ۹۰ به محدود ۹ تا ۱۰ هزار معامله در ماه
        رسیده بود، حالا روی رقم ۳ هزار معامله در ماه ایستاده است. در حقیقت، در
        شرایط فعلی اقتصاد ایران به دلیل کنترل نرخ ارز و کاهش سرعت گردش پول،
        دورنمای تورمی کوتاه مدتی که سرمایه‌گذاران را به بازار املاک جذب کند وجود
        ندارد و متقاضیان مصرفی نیز متاسفانه توانی برخی خرید ملک ندارند.
      </p>

      {/* 📉 Second Paragraph - Market in Summer */}
      <p className="text-style">
        بازار مسکن در تابستان امسال در سه ماه متوالی شاهد تورم منفی بوده و
        آنگونه که آمارهای رسمی نشان می‌دهد، در مهرماه نیز با وجود رشد اندک قیمت،
        از منظر تعداد معاملات همچنان کساد و راکد بوده است. از منظر فعالان بازار
        مسکن، وضعیت فعلی بازار پاسخی است به جهش‌های متوالی قیمت در سال‌های گذشته
        و به واسطه رشد نجومی قیمت‌ها در این بازار، فعلا رغبتی برای خرید این
        کالای ضروری اما سرمایه‌ای وجود ندارد.
      </p>
    </article>
  );
});

export default MarketAnalysis;
