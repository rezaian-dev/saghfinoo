import React, { memo } from "react";

const HousingScoutBox = memo(({ img, alt, price, caption }) => {
  return (
    <>
      {/* 📦✨ Property box container with hover effects (translation & shadow) ✨📦 */}
      <div className="housing-scout-box">
        
        {/* 🏡🖼️ Image container for the property 🖼️🏡 */}
        <div>
          <img className="housing-scout-box__image" src={img} loading="lazy" alt={alt} />
        </div>

        {/* 💰📜 Content section containing price & caption 📜💰 */}
        <div className="housing-scout-box__content">
          {/* 💵 Formatted price with Persian numerals & custom separator 💵 */}
          <h5 className="housing-scout-box__price">
            {price.toLocaleString("fa-IR").replace(/٬/g, ".")}
          </h5>

          {/* 🏷️ Property caption 🏷️ */}
          <span className="housing-scout-box__caption">{caption}</span>
        </div>
      </div>
    </>
  );
});

export default HousingScoutBox;
