import React, { memo } from "react";
import useToast from "../../../hooks/useToast";

// Memoize the component to optimize re-renders
const RelatedLinks = memo(() => {
  // 📝 List of search suggestions to be displayed as links
  const searchSuggestions = [
    { id: 1, title: "املاک در نارمک" },
    { id: 2, title: "املاک در پونک" },
    { id: 3, title: "املاک در ولنجک" },
    { id: 4, title: "املاک در فرمانیه" },
    { id: 5, title: "املاک در نیاوران" },
    { id: 6, title: "املاک در امانیه" },
  ];

  const { handleToastInfo } = useToast();

  return (
    <div className="container">
      {/* 📌 Section title for the related links */}
      <h3 className="title">لینک های مرتبط</h3>

      {/* 🔗 Display the related links in a grid */}
      <div className="related-links__grid">
        {/* 💬 Iterate over the suggestions to create each link */}
        {searchSuggestions.map(({ id, title }) => (
          <a
            href="#"
            key={id}
            className="related-links__item"
            onClick={(e) => {
              e.preventDefault();
              // 💡 Show a toast message when a link is clicked
              handleToastInfo("این قسمت در نسخه دمو فعال نیست.");
            }}
          >
            {title} {/* 🏠 Display the title of each related link */}
          </a>
        ))}
      </div>
    </div>
  );
});

export default RelatedLinks;
