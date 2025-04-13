import React, { memo } from "react";

// Memoize the component to optimize re-renders
const RelatedLinks = memo(() => {
  // Search suggestions to be displayed as links
  const searchSuggestions = [
    { id: 1, title: "املاک در نارمک" },
    { id: 2, title: "املاک در پونک" },
    { id: 3, title: "املاک در ولنجک" },
    { id: 4, title: "املاک در فرمانیه" },
    { id: 5, title: "املاک در نیاوران" },
    { id: 6, title: "املاک در امانیه" },
  ];

  return (
    <div className="container">
      {/* 📌 Title for the related links section */}
      <h3 className="title">لینک های مرتبط</h3>

      {/* 🔗 Grid to display the related links */}
      <div className="related-links__grid">
        {/* 💬 Map over search suggestions to display each link */}
        {searchSuggestions.map(({ id, title }) => (
          <a href="#" key={id} className="related-links__item">
            {title} {/* 🏠 Each related link title */}
          </a>
        ))}
      </div>
    </div>
  );
});

export default RelatedLinks;
