import React, { memo } from "react";
import useToast from "../../../../hooks/useToast";
import { suggestedAreas } from "../../../../data/realEstateData";

const SuggestedSearches = memo(() => {
  const { handleToastInfo } = useToast();

  const message = (e) => {
    e.preventDefault();
    handleToastInfo("این قسمت در نسخه دمو فعال نیست.");
  };

  return (
    <>
      {/* 🔍 Title for the suggested searches section */}
      <h3 className="suggested-searches__title">جستجوهای پیشنهادی</h3>

      {/* 🧭 Grid displaying each search suggestion */}
      <div className="suggested-searches__grid">
        {suggestedAreas.map(({ title, id }) => (
          <a
            key={id}
            href=""
            className="suggested-searches__item suggested-searches__item--link"
            onClick={(e) => message(e)}
          >
            {title}
          </a>
        ))}
      </div>
    </>
  );
});

export default SuggestedSearches;
