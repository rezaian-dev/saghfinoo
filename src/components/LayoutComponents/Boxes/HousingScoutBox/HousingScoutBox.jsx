import React, { memo, useEffect, useRef } from "react";

const HousingScoutBox = memo(({ img, alt, price, caption }) => {
  const counterRef = useRef();
  const countRef = useRef(0); // 🧮 Hold current count without triggering re-render

  useEffect(() => {
    const scrollHandler = () => {
      // 👀 Start counting when the element appears on screen
      if (countRef.current === 0 && counterRef.current.getBoundingClientRect().top < window.innerHeight) {
        animateCounter();
      }
    };

    window.addEventListener("scroll", scrollHandler);
    scrollHandler(); // ⚡ Check immediately after mount

    return () => window.removeEventListener("scroll", scrollHandler); // 🧹 Clean up on unmount
  }, []);

  const animateCounter = () => {
    const increment = Math.max(1, Math.floor(price / 400)); // ➕ How much to increase each step

    const timer = setInterval(() => {
      countRef.current += increment;

      if (countRef.current >= price) {
        countRef.current = price;
        clearInterval(timer); // 🛑 Stop timer when done
      }

      // 🔢 Update the DOM directly
      if (counterRef.current) {
        counterRef.current.innerText = formatNumber(countRef.current);
      }
    }, 80); // ⏳ Update every 80ms
  };

  const formatNumber = (num) => num.toLocaleString("fa-IR").replace(/٬/g, "."); // 🌍 Persian number format

  return (
    <div className="housing-scout-box">
      <img className="housing-scout-box__image" src={img} alt={alt} loading="lazy" />
      <div className="housing-scout-box__content">
        <h5 className="housing-scout-box__price" ref={counterRef}>
          {formatNumber(0)}
        </h5>
        <span className="housing-scout-box__caption">{caption}</span>
      </div>
    </div>
  );
});

export default HousingScoutBox;
