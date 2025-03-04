import React, { memo } from "react";
import clsx from "classnames";

// 🛠️ Wrapping ServicesSectionItems in React.memo for performance optimization
const ServicesSectionItems = memo(({ title, items, mobile }) => {
  return (
    <div>
      {/* 🎯 Title of the service section */}
      <span className="services-section__title">{title}</span>

      {/* 📋 List of items in the service section */}
      <ul
        className={clsx("services-section__list", {
          "services-section__list--mobile": mobile, // 📱 For mobile view
          "services-section__list--desktop": !mobile,
          "services-section__list--with-icons": items.some(({ icon }) => icon),
          "services-section__list--no-icons": !items.some(({ icon }) => icon),
        })}
      >
        {/* 🔢 Render each item in the list */}
        {items.map(({ id, icon, content }) => (
          <li key={id} className="services-section__list-item">
            {/* 💡 Display icon if available */}
            {icon && icon}
            <a href="#" aria-label={content}>
              {content}
            </a>{" "}
            {/* Add aria-label for accessibility */}
          </li>
        ))}

        {/* ⭐ Special item for user account section */}
        {title === "حساب کاربری" && (
          <li className="services-section__trust-logo">
            <img
              src="images/logos/Logo-trust.webp"
              loading="lazy"
              alt="trust-logo"
            />
          </li>
        )}
      </ul>
    </div>
  );
});

export default ServicesSectionItems;
